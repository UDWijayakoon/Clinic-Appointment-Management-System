import os
import re

def html_to_jsx(html):
    # Convert class to className
    html = re.sub(r'class=', 'className=', html)
    # Convert for to htmlFor
    html = re.sub(r'for=', 'htmlFor=', html)
    # Convert HTML comments
    html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html, flags=re.DOTALL)
    # Self close tags (simplistic regex, might need manual touch-ups)
    html = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', html)
    html = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', html)
    html = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', html)
    html = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', html)
    
    # Handle style attribute
    def style_replacer(match):
        style_str = match.group(1)
        props = []
        for prop in style_str.split(';'):
            if ':' in prop:
                k, v = prop.split(':', 1)
                k = k.strip()
                v = v.strip()
                # kebab to camel
                parts = k.split('-')
                k = parts[0] + ''.join(x.title() for x in parts[1:])
                props.append(f"{k}: '{v}'")
        return 'style={{' + ', '.join(props) + '}}'
        
    html = re.sub(r'style="([^"]*)"', style_replacer, html)
    
    # Replace href="login.html" with to="/login" etc (simplistic)
    html = re.sub(r'href="([^"]+)\.html"', r'to="/\1"', html)
    # Replace <a> with <Link> if it has 'to='
    html = re.sub(r'<a([^>]+)to="([^"]+)"([^>]*)>', r'<Link\1to="\2"\3>', html)
    html = re.sub(r'</a>', r'</Link>', html)
    # but some links are #href, revert those
    html = re.sub(r'<Link([^>]+)href="([^"]+)"([^>]*)>', r'<a\1href="\2"\3>', html)
    html = re.sub(r'</Link>(?=\s*<a)', r'</a>', html) # Hacky

    # Fix inline onclick handlers (remove them for React conversion)
    html = re.sub(r'onclick="[^"]*"', '', html)

    return html

pages = [
    ('index.html', 'Home'),
    ('login.html', 'Login'),
    ('register.html', 'Register'),
    ('404.html', 'NotFound'),
    ('patient_dashboard.html', 'PatientDashboard'),
    ('book_appointment.html', 'BookAppointment'),
    ('my_appointments.html', 'MyAppointments'),
    ('patient_profile.html', 'PatientProfile'),
    ('doctor_dashboard.html', 'DoctorDashboard'),
    ('doctor_appointments.html', 'DoctorAppointments'),
    ('doctor_profile.html', 'DoctorProfile'),
    ('admin_dashboard.html', 'AdminDashboard'),
    ('admin_doctors.html', 'ManageDoctors'),
    ('admin_patients.html', 'ManagePatients'),
    ('admin_appointments.html', 'SystemAppointments'),
    ('profile.html', 'SharedProfile')
]

src_dir = 'C:\\Users\\HP\\Desktop\\ClinicAppointmentSystem\\frontend'
dest_dir = 'C:\\Users\\HP\\Desktop\\ClinicAppointmentSystem\\frontend-react\\src\\pages'

os.makedirs(dest_dir, exist_ok=True)

for file, comp_name in pages:
    file_path = os.path.join(src_dir, file)
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
        if body_match:
            body_content = body_match.group(1)
            
            # Remove scripts
            body_content = re.sub(r'<script.*?</script>', '', body_content, flags=re.DOTALL)
            
            jsx = html_to_jsx(body_content)
            
            code = f"""import React from 'react';
import {{ Link }} from 'react-router-dom';

const {comp_name} = () => {{
    return (
        <>
            {jsx}
        </>
    );
}};

export default {comp_name};
"""
            with open(os.path.join(dest_dir, f"{comp_name}.jsx"), 'w', encoding='utf-8') as out_f:
                out_f.write(code)
            print(f"Converted {comp_name}")

print("Done")
