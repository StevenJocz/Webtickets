import { useEffect, useState } from "react";
import { GetAreas, GetPrioridades } from "../../../service/catalogos.service";
import type { Area, Prioridad } from "../../../models/catalogos";

export const useAreas = () => {
    const [areas, setAreas] = useState<Area[]>([]);

    useEffect(() => {
        GetAreas()
            .then(setAreas)
    }, []);

    return { areas };
};

export const usePrioridades  = () => {
    const [prioridades, setPrioridades] = useState<Prioridad[]>([]);

    useEffect(() => {
        GetPrioridades()
            .then(setPrioridades)
    }, []);

    return { prioridades };
};