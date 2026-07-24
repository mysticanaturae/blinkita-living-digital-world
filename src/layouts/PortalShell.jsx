import PortalNavigation from "../components/navigation/PortalNavigation";

export default function PortalShell({
    title,
    subtitle,
    children,
}) {
    return (
        <div className="portal-layout">

            <PortalNavigation />

            <header className="portal-header">
                <h1>{title}</h1>

                {subtitle && (
                    <p>{subtitle}</p>
                )}
            </header>

            <main className="portal-content">
                {children}
            </main>

        </div>
    );
}