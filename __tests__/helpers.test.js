const { test, expect } = require("@jest/globals");

const {format_date, format_plural, format_url} = require('../utils/helpers');

//date tester
test('format_date() returns a date string', () =>{
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

//test for plural
test('format_plural() returns a plural when it recieves a value greater than one', () => {
    let word = 'Lion';
    let amount = 2;

    expect(format_plural(word, amount)).toBe('Lions');
    // expect(format_plural('tiger', 3)).toBe('tigers');
});

//testing url shortening
test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});