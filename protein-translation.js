const codon = {
    Methionine: 'AUG',
    Phenylalanine: ['UUU', 'UUC'],
    Leucine: ['UUA','UUG'],
    Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
    Tyrosine: ['UAU', 'UAC'],
    Cysteine: ['UGU', 'UAC'],
    Tryptophan: 'UGG',
    Stop: ['UAA', 'UAG', 'UGA']
};

const splitingCodon = function (str) {
    let splitedString = [];
    if (typeof str !== "string" || str === []) {
        console.log('RNA input must be a string type');
        return false;
    } else {
        let upperStr = str.toUpperCase();
        splitedString = upperStr.match(/.{1,3}/g);
        //console.log(splitedString);
    }
    return splitedString;
};

const translate = function (inputRna) {
    let rnaTranslating = splitingCodon(inputRna);
    console.log(rnaTranslating);
    let rna = null;
    let translatedRna = [];

    for (let i = 0; i <= rnaTranslating.length; i++) {
        if (rnaTranslating[i] === codon.Methionine) {
            rna = 'Methionine';
            translatedRna.push(rna);
        } else if (rnaTranslating[i] === codon.Phenylalanine[0] || rnaTranslating[i] === codon.Phenylalanine[1]) {
            rna = 'Phenylalanine';
            translatedRna.push(rna);
        } else if (rnaTranslating[i] === codon.Leucine[0] || rnaTranslating[i] === codon.Leucine[1]) {
            rna = 'Leucine';
            translatedRna.push(rna);
        } else if (rnaTranslating[i] === codon.Serine[0] || rnaTranslating[i] === codon.Serine[1] ||rnaTranslating[i] === codon.Serine[2] || rnaTranslating[i] === codon.Serine[3]) {
            rna = 'Serine';
            translatedRna.push(rna);
        } else if (rnaTranslating[i] === codon.Tyrosine[0] || rnaTranslating[i] === codon.Tyrosine[1]) {
            rna = 'Tyrosine';
            translatedRna.push(rna);
        } else if (rnaTranslating[i] === codon.Cysteine[0] || rnaTranslating[i] === codon.Cysteine[1]) {
            rna = 'Cysteine';
            translatedRna.push(rna);
        } else if (rnaTranslating[i] === codon.Tryptophan) {
            rna = 'Tryptophan';
            translatedRna.push(rna);
        } else if (rnaTranslating[i] === codon.Stop[0] || rnaTranslating[i] === codon.Stop[1] || rnaTranslating[i] === codon.Stop[2]) {
            rna = 'STOP';
            translatedRna.push(rna);
        }
    }
    console.log(translatedRna);
    return translatedRna;
};

translate('auGuuUUUcUUa');



module.exports = translate;




