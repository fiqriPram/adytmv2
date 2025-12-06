import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <About />
            </main>
        </>
    );
}
