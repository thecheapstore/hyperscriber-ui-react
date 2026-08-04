type PauseHandler = () => void;

const registry = new Map<string, PauseHandler>();
let activeId: string | null = null;

/** Ensures only one portfolio video plays at a time across the page. */
export const videoPlaybackManager = {
  register(id: string, onPause: PauseHandler) {
    registry.set(id, onPause);
    return () => {
      registry.delete(id);
      if (activeId === id) activeId = null;
    };
  },
  notifyPlaying(id: string) {
    if (activeId && activeId !== id) {
      registry.get(activeId)?.();
    }
    activeId = id;
  },
  notifyPaused(id: string) {
    if (activeId === id) activeId = null;
  },
};
