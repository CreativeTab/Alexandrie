const isOpened = ref(false);
const hasSidebar = ref(false);
const paneWidth = ref(360); // initial width of pane 1
const isResizing = ref(false);
const workspaceId = ref<string | null>(null);

export function useSidebar() {
  const toggleSidebar = () => (isOpened.value = !isOpened.value);

  return {
    toggleSidebar,
    isOpened,
    hasSidebar,
    paneWidth,
    isResizing,
    workspaceId,
  };
}
