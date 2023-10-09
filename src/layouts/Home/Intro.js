import { Fragment, useEffect, useState } from 'react';
import { Section } from 'components/Section';
import { Transition } from 'components/Transition';
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
            tabIndex={-1} 
            {...rest}

        >
            <Transition in timeout={3000}>
                {(isVisible, status) => (
                <Fragment>
                    <header className={styles.text}>
                        <h1 className={styles.name} data-visible={isVisible} id={titleId}>
                            Brendan Payne
                        </h1>
                        <p className={styles.title} data-visible={isVisible}>
                            Software Engineer
                        </p>
                    </header>
                </Fragment>
                )}
            </Transition>
        </Section>
    )
}