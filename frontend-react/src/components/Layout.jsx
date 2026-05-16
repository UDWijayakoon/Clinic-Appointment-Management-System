import React from 'react';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';

const Layout = ({ children, role, user }) => {
    return (
        <div className="dashboard-body" style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar role={role} />
            <main className="main-content" style={{ flex: 1 }}>
                <TopHeader user={user} />
                <div className="dashboard-content">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
