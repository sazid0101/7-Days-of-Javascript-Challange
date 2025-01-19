function canPay(noteValues, chipPrice) {
    if (noteValues.length === 0) {
    return false;
    }
    const retailAmount = noteValues.reduce((sum, note) => sum + note, 0);
    return retailAmount >= chipPrice;
    }
    const retailNotes = [1, 2, 5];
    const chipPrice = 7;
    console.log(canPay(retailNotes, chipPrice));
    const retailNotesEmpty = [];
    const chipPriceEmpty = 10;
    console.log(canPay(retailNotesEmpty, chipPriceEmpty));