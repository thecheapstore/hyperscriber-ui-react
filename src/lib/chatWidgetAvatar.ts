// The GoHighLevel (LeadConnector) chat widget sometimes keeps its built in stock avatar
// (defaultAvatar.png) instead of the custom founder photo saved in its config. The photo is
// requested, but the widget does not always swap it in (more likely when the image is already
// cached). The widget renders inside an open shadow root, so page CSS cannot reach it. This
// watches for the widget and replaces any stock avatar with the self hosted founder photo, so
// visitors always see the same face.
const AVATAR_SRC = '/chat-avatar-abhijeet-jain.webp';
const AVATAR_ALT = 'Abhijeet Jain, Founder and CEO of Calibre Associates';
const STOCK_MARKER = 'defaultAvatar';
const MAX_WATCH_MS = 120_000;

const patch = (root: ParentNode) => {
  root.querySelectorAll<HTMLImageElement>(`img[src*="${STOCK_MARKER}"]`).forEach((img) => {
    img.removeAttribute('srcset');
    img.src = AVATAR_SRC;
    img.alt = AVATAR_ALT;
  });
};

export const keepChatWidgetAvatar = () => {
  if (typeof window === 'undefined') return;

  let attached: ShadowRoot | null = null;

  const attach = () => {
    const widget = document.querySelector('chat-widget');
    const root = widget?.shadowRoot ?? null;
    if (!root || root === attached) return;
    attached = root;
    patch(root);
    new MutationObserver(() => patch(root)).observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src'],
    });
  };

  attach();
  const started = Date.now();
  const timer = window.setInterval(() => {
    attach();
    if (Date.now() - started > MAX_WATCH_MS) window.clearInterval(timer);
  }, 400);
};
