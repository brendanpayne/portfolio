import styles from './Home.module.css';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { useEffect, useRef, useState } from 'react';

export const Home = () => {
    const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
    const intro = useRef();
    return (
        <div className={styles.home}>
            <Meta
                title="Software Engineer"
                description="Project portfolio for Brendan Payne - a software engineer with a passion for application development."
            />
            <Intro
                id="intro"
                sectionRef={intro}
                scrollIndicatorHidden={scrollIndicatorHidden}
            />

        </div>   
    );
};