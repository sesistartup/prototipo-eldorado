import { isVisualizingApr } from "./isVisualizingApr"

export function getSessionData(sessionDataKey) {
  if (!isVisualizingApr()) {
    const sessionData = JSON.parse(sessionStorage.getItem(sessionDataKey))
    return sessionData
  }
}

export function setSessionData(sessionDataKey, dataToStore) {
  sessionStorage.removeItem(sessionDataKey)
  sessionStorage.setItem(sessionDataKey, JSON.stringify(dataToStore))
}