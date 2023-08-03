function x(){
    var x = document.querySelector("#topic").value;
    var t = document.querySelector("#frame")
    switch(x){
        case 'pe':
            t.src = 'Files/pe.html';
            break;
        case 'mos':
            t.src = 'Files/mos.html';
            break;
        case 'tar':
            t.src = 'Files/tar.html';
            break;
        case 'c':
            t.src = 'Files/c.html';
            break;
        case 'm':
            t.src = 'Files/m.html';
            break;
        case 'l':
            t.src = 'Files/l.html';
            break;
        case 'f':
            t.src = 'Files/f.html';
            break;
        case 'tt':
            t.src = 'Files/tt.html';
            break;
        case 'p':
            t.src = 'Files/p.html';
            break;
        default:
            t.src = 'main.html';
            break;
    }
}