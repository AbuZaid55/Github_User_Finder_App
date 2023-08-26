function useDebounce(cb, delay = 1000) {
    let timeId;
    return (...arg) => {
        clearTimeout(timeId);
        timeId = setTimeout(() => {
            cb(...arg)
        }, delay);
    }
}
export default useDebounce;