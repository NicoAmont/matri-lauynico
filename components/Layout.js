import Header from "./header/Header";

export default function Layout ( { children }) {
    return (
        <div className="overflow-hidden bg-bg" >
            <Header />
            {children }
        </div>
    )
}