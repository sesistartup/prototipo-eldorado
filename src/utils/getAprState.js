import { inject } from "vue";

export function getAprState() {
  return inject('visualizando')
}