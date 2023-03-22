export const config ={
    API_URL: "https://6327c38a5731f3db995dcc95.mockapi.io/api",
}

export const lazyload = () => {
    window.location.reload();
}

export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}