export default {
    mounted(el, binding) {
        console.log(el, binding);
        //  console.log(this.$refs.observer);
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries) => {
    if(entries[0].isIntersecting) {
        binding.value();
        // console.log(observer);
        
    }
    
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection'
}