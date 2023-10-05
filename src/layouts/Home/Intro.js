import { Fragment, useEffect, useState } from 'react';
import { Section } from 'components/Section';
import styles from './Intro.module.css';


export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest}) {
    const titleId = `${id}-title`;
    return (
        <Section
            className={styles.intro}
            as="section"
            id={id}
            ref={sectionRef}
            aria-labelledby={titleId}
            tabIndex={-1} // This is to prevent the section from being focused when the user clicks on the scroll indicator
            {...rest}

        >
            <Fragment>
                <header className={styles.text}>
                    <h1 className={styles.title} id={titleId}>
                        Brendan Payne
                    </h1>
                </header>
            </Fragment>
        </Section>
    )
}