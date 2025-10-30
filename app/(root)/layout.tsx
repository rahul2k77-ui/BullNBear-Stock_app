import Header from "@/components/Header";

const Layout = ({children}:{children: React.ReactNode}) => {
    return (
        <main className="min-h-screen text-gray-400">
            <Header />
            <div className="container py-10"></div>
            {children}
        </main>
    )
}
export default Layout
