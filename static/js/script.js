
document.getElementById("seoForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const objetivo = document.getElementById("objetivo").value;
    const categoria = document.getElementById("categoria").value;
    const url = document.getElementById("urlProducto").value;

    const resultado = `
        <strong>Título:</strong> Compra lo mejor en ${categoria} - SEOlab<br>
        <strong>Descripción breve:</strong> Potencia tus ${categoria} con nuestra solución optimizada para ${objetivo}.<br>
        <strong>Meta título:</strong> ${categoria.toUpperCase()} | SEOlab especializado<br>
        <strong>Meta descripción:</strong> Mejora la conversión y visibilidad con SEO para ${categoria}.<br>
        <strong>Palabras clave:</strong> ${categoria}, marketplace, ${objetivo}, SEO, UPAEP
    `;
    document.getElementById("resultado").innerHTML = resultado;
});
