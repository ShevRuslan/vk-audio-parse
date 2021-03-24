import test from './modules/test';

async function async_test() {
    let test_message = await test();
    console.log('%c%s', (window.log_color) ? window.log_color.blue : '', test_message);
    console.log(1);
}

async_test();