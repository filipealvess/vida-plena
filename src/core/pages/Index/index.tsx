import AreaCard from "@/components/Cards/Area";
import Logo from "@/components/Logo";
import styles from '@/core/pages/Index/styles.module.css';
import { AREAS } from "@/constants/areas";
import { useEffect, useState } from "react";
import storage from "@/modules/storage";
import { updateUI } from "@/utils/theme";

import {IArea} from '@/constants/areas/index.d';

function IndexPage() {
    const [areas, setAreas] = useState<IArea[]>([]);

    function handleChangeTheme() {
        const current = storage.theme.get() ?? 'light';

        storage.theme.set(current === 'light' ? 'dark' : 'light');

        updateUI();
    }

    useEffect(() => {
        const stored = storage.areas.list();

        setAreas(AREAS.map(area => ({
            ...area,
            goals: stored[area.id]?.goals?.length ?? 0,
        })));

        document.title = 'Vida Plena';
    }, []);

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <Logo />

                <button onClick={handleChangeTheme}>
                    Mudar tema
                </button>
            </div>

            <div className={styles.content}>
                <h2>Organize sua vida por etapas</h2>

                <section>
                    {areas.map(area => (
                        <AreaCard
                            key={area.title}
                            goals={area.goals}
                            title={area.title}
                            icon={area.icon}
                            route={area.route}
                        />
                    ))}
                </section>
            </div>
        </main>
    );
}

export default IndexPage;
