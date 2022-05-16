import { inject } from "vue";

export function isVisualizingApr() {
  return inject('visualizando')
}