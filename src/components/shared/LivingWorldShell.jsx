import LivingTimeHeader from "./LivingTimeHeader";

export default function LivingWorldShell({ children }) {

    return (
        <main className="living-world-shell">

            <LivingTimeHeader />

            <section className="living-world-content">
                {children}
            </section>

        </main>
    );
}
