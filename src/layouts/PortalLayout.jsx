export default function PortalLayout({
    title,
    subtitle,
    children,
}) {
    return (
        <div className="portal-layout">
            <header className="portal-header">
                <h1>{title}</h1>

                {subtitle && <p>{subtitle}</p>}
            </header>

            <main className="portal-content">
                {children}
            </main>
        </div>
    );
}