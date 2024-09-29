export const INJECTED_JAVASCRIPT = `
  (function() {
    setTimeout(()=>{
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )
      
      window.ReactNativeWebView.postMessage(JSON.stringify(height));
    }, 1000)  
  })();
`;
