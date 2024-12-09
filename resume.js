function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'images/flutter resume.pdf';
    link.download = 'flutter resume.pdf';
    link.click();
}