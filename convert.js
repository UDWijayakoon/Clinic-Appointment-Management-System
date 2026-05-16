const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
    // Basic regex replacements for React JSX compatibility
    html = html.replace(/class=/g, 'className=');
    html = html.replace(/for=/g, 'htmlFor=');
    
    // Replace HTML comments
    html = html.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    
    // Self close tags
    html = html.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
    html = html.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');
    html = html.replace(/<br([^>]*?)(?<!\/)>/g, '<br$1 />');
    html = html.replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />');

    // Inline style conversion
    html = html.replace(/style="([^"]*)"/g, (match, p1) => {
        const props = p1.split(';').filter(Boolean).map(prop => {
            let [k, v] = prop.split(':');
            if(!k || !v) return '';
            k = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `${k}: '${v.trim()}'`;
        }).filter(Boolean);
        return `style={{ ${props.join(', ')} }}`;
    });

    // Safe link conversion
    html = html.replace(/<a([^>]*?)href="([^"]+)\.html"([^>]*?)>([\s\S]*?)<\/a>/g, '<Link$1to="/$2"$3>$4</Link>');
    html = html.replace(/<a([^>]*?)href="index\.html"([^>]*?)>([\s\S]*?)<\/a>/g, '<Link$1to="/"$3>$4</Link>');

    // Remove inline onclick
    html = html.replace(/onclick="[^"]*"/g, '');
    
    return html;
}

const pages = [
    { file: 'index.html', comp: 'Home' },
    { file: 'login.html', comp: 'Login' },
    { file: 'register.html', comp: 'Register' },
    { file: '404.html', comp: 'NotFound' },
    { file: 'patient_dashboard.html', comp: 'PatientDashboard' },
    { file: 'book_appointment.html', comp: 'BookAppointment' },
    { file: 'my_appointments.html', comp: 'MyAppointments' },
    { file: 'patient_profile.html', comp: 'PatientProfile' },
    { file: 'doctor_dashboard.html', comp: 'DoctorDashboard' },
    { file: 'doctor_appointments.html', comp: 'DoctorAppointments' },
    { file: 'doctor_profile.html', comp: 'DoctorProfile' },
    { file: 'admin_dashboard.html', comp: 'AdminDashboard' },
    { file: 'admin_doctors.html', comp: 'ManageDoctors' },
    { file: 'admin_patients.html', comp: 'ManagePatients' },
    { file: 'admin_appointments.html', comp: 'SystemAppointments' },
    { file: 'profile.html', comp: 'SharedProfile' }
];

const srcDir = path.join(__dirname, 'frontend');
const destDir = path.join(__dirname, 'frontend-react', 'src', 'pages');

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

for (const { file, comp } of pages) {
    const filePath = path.join(srcDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        
        const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/);
        if (bodyMatch) {
            let bodyContent = bodyMatch[1];
            bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/g, '');
            
            const jsx = htmlToJsx(bodyContent);
            
            const code = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst ${comp} = () => {\n    return (\n        <>\n            ${jsx}\n        </>\n    );\n};\n\nexport default ${comp};\n`;
            
            fs.writeFileSync(path.join(destDir, `${comp}.jsx`), code, 'utf-8');
            console.log(`Converted ${comp}`);
        }
    }
}
console.log("Done");
