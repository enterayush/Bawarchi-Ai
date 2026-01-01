import { useEffect, useRef } from "react";
import Markdown from "react-markdown";

export default function Recipe({ recipe }) {

    const recipeRef = useRef(null);

    useEffect(() => {
        if (!recipe || !recipeRef.current) return;

        // small delay to wait for render / animation
        setTimeout(() => {
        recipeRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        }, 120);
    }, [recipe]);

    return (
        <section ref={recipeRef} className="suggested-recipe">
        <h2>Bawarchi says — you’ll thank me later 😎:</h2>
        <Markdown>{recipe}</Markdown>
        </section>
    );
}
