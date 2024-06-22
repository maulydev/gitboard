export const sendToWebhits = (path: string) => {
  const endpoint = "/api/webhits/";
  const body = JSON.stringify({ path });
  (navigator.sendBeacon && navigator.sendBeacon(endpoint, body)) ||
    fetch(endpoint, { body, method: "POST", keepalive: true });
};
