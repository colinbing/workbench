import type { WorkshopDoc } from './types';

const STORAGE_KEY = 'workshop:doc';

export function loadDoc(): WorkshopDoc | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as WorkshopDoc) : null;
  } catch {
    return null;
  }
}

export function saveDoc(doc: WorkshopDoc) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(doc));
}
