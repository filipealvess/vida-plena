import AreaCard from "@/components/Cards/Area";
import Logo from "@/components/Logo";
import styles from '@/core/pages/Index/styles.module.css';
import { AREAS } from "@/constants/areas";
import { useEffect, useState } from "react";

import {IArea} from '@/constants/areas/index.d';

function IndexPage() {
    const [areas, setAreas] = useState<IArea[]>([]);

    useEffect(() => {
        setAreas(AREAS);

        document.title = 'Vida Plena';
    }, []);

    return (
        <main className={styles.container}>
            <Logo />

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
