import LivingTimeHeader from "./LivingTimeHeader";

export default function PremiumWorldShell({ children }) {
    return (
        <main className="premium-world-shell">

            <LivingTimeHeader />

            <section className="premium-world-content">
                {children}
            </section>

        </main>
    );
}
