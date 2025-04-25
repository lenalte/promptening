{/* Sidebar-Komponente basiert auf Standard-Seitenleiste von Flowbite (https://flowbite.com/docs/components/sidebar/) */ }
import { useState } from "react";
import Image from "next/image";

export default function Sidebar({ onToggle }) {
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
        onToggle(!collapsed); // Gib den Zustand der Sidebar nach außen weiter
    };

    return (
        <aside
            id="default-sidebar"
            className={`fixed top-0 left-0 z-40 h-screen transition-all ${collapsed ? 'w-20' : 'w-64'} bg-red-custom h-screen`}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800" style={{ backgroundColor: "var(--red-custom)" }}>
                <ul className="space-y-2 font-medium">
                    {/*Profil Option*/}
                    <li>
                        <a
                            href="#"
                            style={{ color: "var(--foreground)" }}
                            className="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-[var(--background)] dark:hover:bg-[var(--background)] group"
                            onClick={toggleSidebar}
                        >
                            <Image
                                className="full"
                                src="./nobody_avatar.svg"
                                alt="Avatar"
                                width={30}
                                height={30}
                                style={{ width: "30px", height: "30px", marginRight: "10px", fill: "var(--foreground)" }}
                            />

                            <span className={`ms-3 ${collapsed ? 'hidden' : ''}`}>Profil</span>
                        </a>
                    </li>

                    {/*Leaderboard Option*/}
                    <li>
                        <a
                            href="#"
                            style={{ color: "var(--foreground)" }}
                            className="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-[var(--background)] dark:hover:bg-[var(--background)] group"
                            onClick={toggleSidebar}
                        >
                            <Image
                                className="full"
                                src="./leaderboard.svg"
                                alt="Leaderboard"
                                width={25}
                                height={25}
                                style={{ width: "25px", height: "25px", marginRight: "10px", fill: "var(--foreground)" }}
                            />
                            <span className={`flex-1 ms-3 whitespace-nowrap ${collapsed ? 'hidden' : ''}`}>Leaderboard</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}