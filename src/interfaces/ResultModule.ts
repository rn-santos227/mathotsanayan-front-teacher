import Module from "@/types/Module";
import GraphPie from "./GraphPie";

interface ResultModule extends GraphPie {
  total: number;
  module: Module;
}

export default ResultModule;
