import { AnimatePresence, usePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const Transition = ({ 
        children, 
        timeout=0, 
        onEnter,
        onExit,
        in: show, 
        unmount
     }) => {
    const enterTimeout = useRef(false);
    const exitTimeout = useRef(false);

    useEffect(() => {
        if (show) {
            clearTimeout(exitTimeout.current);
        } else {
            clearTimeout(enterTimeout.current);
        }
    }, [show]);

    return (
        <AnimatePresence>
            {(show || !unmount) && (
                <TransitionChild
                    timeout={timeout}
                    enterTimeout={enterTimeout}
                    exitTimeout={exitTimeout}
                    onEnter={onEnter}
                    onExit={onExit}
                    show={show}
                >
                    {children}
                </TransitionChild>
            )}
        </AnimatePresence>
    );
};

const TransitionChild = ({ 
        children, 
        timeout,
        enterTimeout,
        exitTimeout,
        onEnter,
        onExit,
        show,
    }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPresent, safeToRemove] = usePresence();
    const [status, setStatus] = useState('entering');
    const splitTimeout = typeof timeout === 'object';
    useEffect(() => {
        if (isVisible || !show) return;

        const t = splitTimeout ? timeout.enter : timeout;

        clearTimeout(enterTimeout);
        clearTimeout(exitTimeout);

        setIsVisible(true);
        setStatus('entering');
        onEnter?.();

        enterTimeout.current = setTimeout(() => {
            setStatus('entered');
        }, t);
    }, [show, isVisible, timeout, splitTimeout, onEnter]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!isVisible || show) return;

        const t = splitTimeout ? timeout.exit : timeout;

        clearTimeout(enterTimeout);
        clearTimeout(exitTimeout);

        setStatus('exiting');
        onExit?.();

        exitTimeout.current = setTimeout(() => {
            setIsVisible(false);
            setStatus('exited');
        }, t);
    }, [show, isVisible, timeout, splitTimeout, onExit]); // eslint-disable-line react-hooks/exhaustive-deps
    return children(show ? isPresent : false, status);
}