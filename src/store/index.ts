import { create } from "zustand";
import {
  IntialDataType,
  EscalonamentoTypes,
  AllProcessesType,
  ProcessDataType,
} from "../types";

export const useInitialDataStore = create<IntialDataType>((set) => ({
  numeroDeProcessos: undefined,
  sobrecarga: undefined,
  quantum: undefined,
  escalonameto: undefined,
  setNumeroDeProcessos: (numeroDeProcessos: number) =>
    set({ numeroDeProcessos }),
  setSobrecarga: (sobrecarga: number) => set({ sobrecarga }),
  setQuantum: (quantum: number) => set({ quantum }),
  setEscalonamento: (escalonameto: EscalonamentoTypes) => set({ escalonameto }),
  initialDataLock: false,
  setInitialDataLock: (initialDataLock: boolean) => set({ initialDataLock }),
}));

export const useProcessDataStore = create<AllProcessesType>((set) => ({
  allProcesses: 0,
  processList: undefined,
}));
