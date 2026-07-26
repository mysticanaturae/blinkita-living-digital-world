import { portals } from "../../core/data/portals";

export default function PortalNavigation() {

    const sortedPortals = [...portals].sort(
        (a, b) => a.order - b.order
    );

    return (
        <nav className="portal-navigation">

            {sortedPortals.map((portal) => (
                <a
                    key={portal.id}
                    href={portal.path}
                >
                    {portal.title}
                </a>
            ))}

        </nav>
    );
}