import {FC, ReactNode, useCallback, useEffect, useState} from "react";
import {lowlight} from "lowlight/lib/core";

const LoadAllLanguages: FC<{children: ReactNode}> = (props) => {
  const {children} = props;
  const [showChildren, setShowChildren] = useState(false);
  useEffect(() => {
    const abnf = require('highlight.js/lib/languages/abnf');
    const accesslog = require('highlight.js/lib/languages/accesslog');
    const actionscript = require('highlight.js/lib/languages/actionscript');
    const ada = require('highlight.js/lib/languages/ada');
    const angelscript = require('highlight.js/lib/languages/angelscript');
    const apache = require('highlight.js/lib/languages/apache');
    const applescript = require('highlight.js/lib/languages/applescript');
    const arcade = require('highlight.js/lib/languages/arcade');
    const arduino = require('highlight.js/lib/languages/arduino');
    const armasm = require('highlight.js/lib/languages/armasm');
    const xml = require('highlight.js/lib/languages/xml');
    const asciidoc = require('highlight.js/lib/languages/asciidoc');
    const aspectj = require('highlight.js/lib/languages/aspectj');
    const autohotkey = require('highlight.js/lib/languages/autohotkey');
    const autoit = require('highlight.js/lib/languages/autoit');
    const avrasm = require('highlight.js/lib/languages/avrasm');
    const awk = require('highlight.js/lib/languages/awk');
    const axapta = require('highlight.js/lib/languages/axapta');
    const bash = require('highlight.js/lib/languages/bash');
    const basic = require('highlight.js/lib/languages/basic');
    const bnf = require('highlight.js/lib/languages/bnf');
    const brainfuck = require('highlight.js/lib/languages/brainfuck');
    const c = require('highlight.js/lib/languages/c');
    const cal = require('highlight.js/lib/languages/cal');
    const capnproto = require('highlight.js/lib/languages/capnproto');
    const ceylon = require('highlight.js/lib/languages/ceylon');
    const clean = require('highlight.js/lib/languages/clean');
    const cmake = require('highlight.js/lib/languages/cmake');
    const coffeescript = require('highlight.js/lib/languages/coffeescript');
    const coq = require('highlight.js/lib/languages/coq');
    const cos = require('highlight.js/lib/languages/cos');
    const cpp = require('highlight.js/lib/languages/cpp');
    const crmsh = require('highlight.js/lib/languages/crmsh');
    const crystal = require('highlight.js/lib/languages/crystal');
    const csharp = require('highlight.js/lib/languages/csharp');
    const csp = require('highlight.js/lib/languages/csp');
    const css = require('highlight.js/lib/languages/css');
    const d = require('highlight.js/lib/languages/d');
    const markdown = require('highlight.js/lib/languages/markdown');
    const dart = require('highlight.js/lib/languages/dart');
    const delphi = require('highlight.js/lib/languages/delphi');
    const diff = require('highlight.js/lib/languages/diff');
    const django = require('highlight.js/lib/languages/django');
    const dns = require('highlight.js/lib/languages/dns');
    const dockerfile = require('highlight.js/lib/languages/dockerfile');
    const dos = require('highlight.js/lib/languages/dos');
    const dsconfig = require('highlight.js/lib/languages/dsconfig');
    const dts = require('highlight.js/lib/languages/dts');
    const dust = require('highlight.js/lib/languages/dust');
    const ebnf = require('highlight.js/lib/languages/ebnf');
    const elixir = require('highlight.js/lib/languages/elixir');
    const elm = require('highlight.js/lib/languages/elm');
    const ruby = require('highlight.js/lib/languages/ruby');
    const erb = require('highlight.js/lib/languages/erb');
    const erlang = require('highlight.js/lib/languages/erlang');
    const excel = require('highlight.js/lib/languages/excel');
    const fix = require('highlight.js/lib/languages/fix');
    const flix = require('highlight.js/lib/languages/flix');
    const fortran = require('highlight.js/lib/languages/fortran');
    const fsharp = require('highlight.js/lib/languages/fsharp');
    const gams = require('highlight.js/lib/languages/gams');
    const gauss = require('highlight.js/lib/languages/gauss');
    const gcode = require('highlight.js/lib/languages/gcode');
    const gherkin = require('highlight.js/lib/languages/gherkin');
    const glsl = require('highlight.js/lib/languages/glsl');
    const gml = require('highlight.js/lib/languages/gml');
    const go = require('highlight.js/lib/languages/go');
    const golo = require('highlight.js/lib/languages/golo');
    const gradle = require('highlight.js/lib/languages/gradle');
    const graphql = require('highlight.js/lib/languages/graphql');
    const groovy = require('highlight.js/lib/languages/groovy');
    const haml = require('highlight.js/lib/languages/haml');
    const handlebars = require('highlight.js/lib/languages/handlebars');
    const haskell = require('highlight.js/lib/languages/haskell');
    const haxe = require('highlight.js/lib/languages/haxe');
    const hsp = require('highlight.js/lib/languages/hsp');
    const http = require('highlight.js/lib/languages/http');
    const hy = require('highlight.js/lib/languages/hy');
    const inform7 = require('highlight.js/lib/languages/inform7');
    const ini = require('highlight.js/lib/languages/ini');
    const irpf90 = require('highlight.js/lib/languages/irpf90');
    const isbl = require('highlight.js/lib/languages/isbl');
    const java = require('highlight.js/lib/languages/java');
    const javascript = require('highlight.js/lib/languages/javascript');
    const json = require('highlight.js/lib/languages/json');
    const julia = require('highlight.js/lib/languages/julia');
    const kotlin = require('highlight.js/lib/languages/kotlin');
    const lasso = require('highlight.js/lib/languages/lasso');
    const latex = require('highlight.js/lib/languages/latex');
    const ldif = require('highlight.js/lib/languages/ldif');
    const leaf = require('highlight.js/lib/languages/leaf');
    const less = require('highlight.js/lib/languages/less');
    const lisp = require('highlight.js/lib/languages/lisp');
    const livecodeserver = require('highlight.js/lib/languages/livecodeserver');
    const livescript = require('highlight.js/lib/languages/livescript');
    const llvm = require('highlight.js/lib/languages/llvm');
    const lsl = require('highlight.js/lib/languages/lsl');
    const lua = require('highlight.js/lib/languages/lua');
    const makefile = require('highlight.js/lib/languages/makefile');
    const mathematica = require('highlight.js/lib/languages/mathematica');
    const matlab = require('highlight.js/lib/languages/matlab');
    const maxima = require('highlight.js/lib/languages/maxima');
    const mel = require('highlight.js/lib/languages/mel');
    const mercury = require('highlight.js/lib/languages/mercury');
    const mipsasm = require('highlight.js/lib/languages/mipsasm');
    const mizar = require('highlight.js/lib/languages/mizar');
    const perl = require('highlight.js/lib/languages/perl');
    const mojolicious = require('highlight.js/lib/languages/mojolicious');
    const monkey = require('highlight.js/lib/languages/monkey');
    const moonscript = require('highlight.js/lib/languages/moonscript');
    const n1ql = require('highlight.js/lib/languages/n1ql');
    const nestedtext = require('highlight.js/lib/languages/nestedtext');
    const nginx = require('highlight.js/lib/languages/nginx');
    const nim = require('highlight.js/lib/languages/nim');
    const nix = require('highlight.js/lib/languages/nix');
    const nsis = require('highlight.js/lib/languages/nsis');
    const objectivec = require('highlight.js/lib/languages/objectivec');
    const ocaml = require('highlight.js/lib/languages/ocaml');
    const openscad = require('highlight.js/lib/languages/openscad');
    const oxygene = require('highlight.js/lib/languages/oxygene');
    const parser3 = require('highlight.js/lib/languages/parser3');
    const pf = require('highlight.js/lib/languages/pf');
    const pgsql = require('highlight.js/lib/languages/pgsql');
    const php = require('highlight.js/lib/languages/php');
    const plaintext = require('highlight.js/lib/languages/plaintext');
    const pony = require('highlight.js/lib/languages/pony');
    const powershell = require('highlight.js/lib/languages/powershell');
    const processing = require('highlight.js/lib/languages/processing');
    const profile = require('highlight.js/lib/languages/profile');
    const prolog = require('highlight.js/lib/languages/prolog');
    const properties = require('highlight.js/lib/languages/properties');
    const protobuf = require('highlight.js/lib/languages/protobuf');
    const puppet = require('highlight.js/lib/languages/puppet');
    const purebasic = require('highlight.js/lib/languages/purebasic');
    const python = require('highlight.js/lib/languages/python');
    const q = require('highlight.js/lib/languages/q');
    const qml = require('highlight.js/lib/languages/qml');
    const r = require('highlight.js/lib/languages/r');
    const reasonml = require('highlight.js/lib/languages/reasonml');
    const rib = require('highlight.js/lib/languages/rib');
    const roboconf = require('highlight.js/lib/languages/roboconf');
    const routeros = require('highlight.js/lib/languages/routeros');
    const rsl = require('highlight.js/lib/languages/rsl');
    const ruleslanguage = require('highlight.js/lib/languages/ruleslanguage');
    const rust = require('highlight.js/lib/languages/rust');
    const sas = require('highlight.js/lib/languages/sas');
    const scala = require('highlight.js/lib/languages/scala');
    const scheme = require('highlight.js/lib/languages/scheme');
    const scilab = require('highlight.js/lib/languages/scilab');
    const scss = require('highlight.js/lib/languages/scss');
    const shell = require('highlight.js/lib/languages/shell');
    const smali = require('highlight.js/lib/languages/smali');
    const smalltalk = require('highlight.js/lib/languages/smalltalk');
    const sml = require('highlight.js/lib/languages/sml');
    const sqf = require('highlight.js/lib/languages/sqf');
    const sql = require('highlight.js/lib/languages/sql');
    const stan = require('highlight.js/lib/languages/stan');
    const stata = require('highlight.js/lib/languages/stata');
    const step21 = require('highlight.js/lib/languages/step21');
    const stylus = require('highlight.js/lib/languages/stylus');
    const subunit = require('highlight.js/lib/languages/subunit');
    const swift = require('highlight.js/lib/languages/swift');
    const taggerscript = require('highlight.js/lib/languages/taggerscript');
    const yaml = require('highlight.js/lib/languages/yaml');
    const tap = require('highlight.js/lib/languages/tap');
    const tcl = require('highlight.js/lib/languages/tcl');
    const thrift = require('highlight.js/lib/languages/thrift');
    const tp = require('highlight.js/lib/languages/tp');
    const twig = require('highlight.js/lib/languages/twig');
    const typescript = require('highlight.js/lib/languages/typescript');
    const vala = require('highlight.js/lib/languages/vala');
    const vbnet = require('highlight.js/lib/languages/vbnet');
    const vbscript = require('highlight.js/lib/languages/vbscript');
    const verilog = require('highlight.js/lib/languages/verilog');
    const vhdl = require('highlight.js/lib/languages/vhdl');
    const vim = require('highlight.js/lib/languages/vim');
    const wasm = require('highlight.js/lib/languages/wasm');
    const wren = require('highlight.js/lib/languages/wren');
    const x86asm = require('highlight.js/lib/languages/x86asm');
    const xl = require('highlight.js/lib/languages/xl');
    const xquery = require('highlight.js/lib/languages/xquery');
    const zephir = require('highlight.js/lib/languages/zephir');

    lowlight.registerLanguage('abnf', abnf);
    lowlight.registerLanguage('accesslog', accesslog);
    lowlight.registerLanguage('actionscript', actionscript);
    lowlight.registerLanguage('ada', ada);
    lowlight.registerLanguage('angelscript', angelscript);
    lowlight.registerLanguage('apache', apache);
    lowlight.registerLanguage('applescript', applescript);
    lowlight.registerLanguage('arcade', arcade);
    lowlight.registerLanguage('arduino', arduino);
    lowlight.registerLanguage('armasm', armasm);
    lowlight.registerLanguage('xml', xml);
    lowlight.registerLanguage('asciidoc', asciidoc);
    lowlight.registerLanguage('aspectj', aspectj);
    lowlight.registerLanguage('autohotkey', autohotkey);
    lowlight.registerLanguage('autoit', autoit);
    lowlight.registerLanguage('avrasm', avrasm);
    lowlight.registerLanguage('awk', awk);
    lowlight.registerLanguage('axapta', axapta);
    lowlight.registerLanguage('bash', bash);
    lowlight.registerLanguage('basic', basic);
    lowlight.registerLanguage('bnf', bnf);
    lowlight.registerLanguage('brainfuck', brainfuck);
    lowlight.registerLanguage('c', c);
    lowlight.registerLanguage('cal', cal);
    lowlight.registerLanguage('capnproto', capnproto);
    lowlight.registerLanguage('ceylon', ceylon);
    lowlight.registerLanguage('clean', clean);
    lowlight.registerLanguage('cmake', cmake);
    lowlight.registerLanguage('coffeescript', coffeescript);
    lowlight.registerLanguage('coq', coq);
    lowlight.registerLanguage('cos', cos);
    lowlight.registerLanguage('cpp', cpp);
    lowlight.registerLanguage('crmsh', crmsh);
    lowlight.registerLanguage('crystal', crystal);
    lowlight.registerLanguage('csharp', csharp);
    lowlight.registerLanguage('csp', csp);
    lowlight.registerLanguage('css', css);
    lowlight.registerLanguage('d', d);
    lowlight.registerLanguage('markdown', markdown);
    lowlight.registerLanguage('dart', dart);
    lowlight.registerLanguage('delphi', delphi);
    lowlight.registerLanguage('diff', diff);
    lowlight.registerLanguage('django', django);
    lowlight.registerLanguage('dns', dns);
    lowlight.registerLanguage('dockerfile', dockerfile);
    lowlight.registerLanguage('dos', dos);
    lowlight.registerLanguage('dsconfig', dsconfig);
    lowlight.registerLanguage('dts', dts);
    lowlight.registerLanguage('dust', dust);
    lowlight.registerLanguage('ebnf', ebnf);
    lowlight.registerLanguage('elixir', elixir);
    lowlight.registerLanguage('elm', elm);
    lowlight.registerLanguage('ruby', ruby);
    lowlight.registerLanguage('erb', erb);
    lowlight.registerLanguage('erlang', erlang);
    lowlight.registerLanguage('excel', excel);
    lowlight.registerLanguage('fix', fix);
    lowlight.registerLanguage('flix', flix);
    lowlight.registerLanguage('fortran', fortran);
    lowlight.registerLanguage('fsharp', fsharp);
    lowlight.registerLanguage('gams', gams);
    lowlight.registerLanguage('gauss', gauss);
    lowlight.registerLanguage('gcode', gcode);
    lowlight.registerLanguage('gherkin', gherkin);
    lowlight.registerLanguage('glsl', glsl);
    lowlight.registerLanguage('gml', gml);
    lowlight.registerLanguage('go', go);
    lowlight.registerLanguage('golo', golo);
    lowlight.registerLanguage('gradle', gradle);
    lowlight.registerLanguage('graphql', graphql);
    lowlight.registerLanguage('groovy', groovy);
    lowlight.registerLanguage('haml', haml);
    lowlight.registerLanguage('handlebars', handlebars);
    lowlight.registerLanguage('haskell', haskell);
    lowlight.registerLanguage('haxe', haxe);
    lowlight.registerLanguage('hsp', hsp);
    lowlight.registerLanguage('http', http);
    lowlight.registerLanguage('hy', hy);
    lowlight.registerLanguage('inform7', inform7);
    lowlight.registerLanguage('ini', ini);
    lowlight.registerLanguage('irpf90', irpf90);
    lowlight.registerLanguage('isbl', isbl);
    lowlight.registerLanguage('java', java);
    lowlight.registerLanguage('javascript', javascript);
    lowlight.registerLanguage('json', json);
    lowlight.registerLanguage('julia', julia);
    lowlight.registerLanguage('kotlin', kotlin);
    lowlight.registerLanguage('lasso', lasso);
    lowlight.registerLanguage('latex', latex);
    lowlight.registerLanguage('ldif', ldif);
    lowlight.registerLanguage('leaf', leaf);
    lowlight.registerLanguage('less', less);
    lowlight.registerLanguage('lisp', lisp);
    lowlight.registerLanguage('livecodeserver', livecodeserver);
    lowlight.registerLanguage('livescript', livescript);
    lowlight.registerLanguage('llvm', llvm);
    lowlight.registerLanguage('lsl', lsl);
    lowlight.registerLanguage('lua', lua);
    lowlight.registerLanguage('makefile', makefile);
    lowlight.registerLanguage('mathematica', mathematica);
    lowlight.registerLanguage('matlab', matlab);
    lowlight.registerLanguage('maxima', maxima);
    lowlight.registerLanguage('mel', mel);
    lowlight.registerLanguage('mercury', mercury);
    lowlight.registerLanguage('mipsasm', mipsasm);
    lowlight.registerLanguage('mizar', mizar);
    lowlight.registerLanguage('perl', perl);
    lowlight.registerLanguage('mojolicious', mojolicious);
    lowlight.registerLanguage('monkey', monkey);
    lowlight.registerLanguage('moonscript', moonscript);
    lowlight.registerLanguage('n1ql', n1ql);
    lowlight.registerLanguage('nestedtext', nestedtext);
    lowlight.registerLanguage('nginx', nginx);
    lowlight.registerLanguage('nim', nim);
    lowlight.registerLanguage('nix', nix);
    lowlight.registerLanguage('nsis', nsis);
    lowlight.registerLanguage('objectivec', objectivec);
    lowlight.registerLanguage('ocaml', ocaml);
    lowlight.registerLanguage('openscad', openscad);
    lowlight.registerLanguage('oxygene', oxygene);
    lowlight.registerLanguage('parser3', parser3);
    lowlight.registerLanguage('pf', pf);
    lowlight.registerLanguage('pgsql', pgsql);
    lowlight.registerLanguage('php', php);
    lowlight.registerLanguage('plaintext', plaintext);
    lowlight.registerLanguage('pony', pony);
    lowlight.registerLanguage('powershell', powershell);
    lowlight.registerLanguage('processing', processing);
    lowlight.registerLanguage('profile', profile);
    lowlight.registerLanguage('prolog', prolog);
    lowlight.registerLanguage('properties', properties);
    lowlight.registerLanguage('protobuf', protobuf);
    lowlight.registerLanguage('puppet', puppet);
    lowlight.registerLanguage('purebasic', purebasic);
    lowlight.registerLanguage('python', python);
    lowlight.registerLanguage('q', q);
    lowlight.registerLanguage('qml', qml);
    lowlight.registerLanguage('r', r);
    lowlight.registerLanguage('reasonml', reasonml);
    lowlight.registerLanguage('rib', rib);
    lowlight.registerLanguage('roboconf', roboconf);
    lowlight.registerLanguage('routeros', routeros);
    lowlight.registerLanguage('rsl', rsl);
    lowlight.registerLanguage('ruleslanguage', ruleslanguage);
    lowlight.registerLanguage('rust', rust);
    lowlight.registerLanguage('sas', sas);
    lowlight.registerLanguage('scala', scala);
    lowlight.registerLanguage('scheme', scheme);
    lowlight.registerLanguage('scilab', scilab);
    lowlight.registerLanguage('scss', scss);
    lowlight.registerLanguage('shell', shell);
    lowlight.registerLanguage('smali', smali);
    lowlight.registerLanguage('smalltalk', smalltalk);
    lowlight.registerLanguage('sml', sml);
    lowlight.registerLanguage('sqf', sqf);
    lowlight.registerLanguage('sql', sql);
    lowlight.registerLanguage('stan', stan);
    lowlight.registerLanguage('stata', stata);
    lowlight.registerLanguage('step21', step21);
    lowlight.registerLanguage('stylus', stylus);
    lowlight.registerLanguage('subunit', subunit);
    lowlight.registerLanguage('swift', swift);
    lowlight.registerLanguage('taggerscript', taggerscript);
    lowlight.registerLanguage('yaml', yaml);
    lowlight.registerLanguage('tap', tap);
    lowlight.registerLanguage('tcl', tcl);
    lowlight.registerLanguage('thrift', thrift);
    lowlight.registerLanguage('tp', tp);
    lowlight.registerLanguage('twig', twig);
    lowlight.registerLanguage('typescript', typescript);
    lowlight.registerLanguage('vala', vala);
    lowlight.registerLanguage('vbnet', vbnet);
    lowlight.registerLanguage('vbscript', vbscript);
    lowlight.registerLanguage('verilog', verilog);
    lowlight.registerLanguage('vhdl', vhdl);
    lowlight.registerLanguage('vim', vim);
    lowlight.registerLanguage('wasm', wasm);
    lowlight.registerLanguage('wren', wren);
    lowlight.registerLanguage('x86asm', x86asm);
    lowlight.registerLanguage('xl', xl);
    lowlight.registerLanguage('xquery', xquery);
    lowlight.registerLanguage('zephir', zephir);
    setShowChildren(true);
  }, []);

  if (showChildren) {
    return <div onMouseEnter={e => e.currentTarget.classList.remove('removeElement')} onMouseLeave={e => e.currentTarget.classList.add('removeElement')}>{children}</div>;
  }
  return <></>;
}

export default LoadAllLanguages;
