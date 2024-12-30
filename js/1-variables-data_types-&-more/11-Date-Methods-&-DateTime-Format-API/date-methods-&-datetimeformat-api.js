let x;
let d = new Date();

x = d.toString();
x = d.getTime();

x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getMinutes();
x = d.getMilliseconds();

x = `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()}`;

x = new Intl.DateTimeFormat('pt-BR').format(d);
x = new Intl.DateTimeFormat('default').format(d);
x = new Intl.DateTimeFormat('default', {month: 'long'}).format(d);

x = d.toLocaleDateString('default', {
    weekday: 'long',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Sao_paulo',
});



console.log(x);
