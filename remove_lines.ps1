$inputFile = "index.html"
$outputFile = "index_temp.html"

$reader = [System.IO.File]::OpenText((Resolve-Path $inputFile).Path)
$writer = [System.IO.StreamWriter]::new((Join-Path (Get-Location) $outputFile), $false, [System.Text.Encoding]::UTF8)

$lineNumber = 1
while ($null -ne ($line = $reader.ReadLine())) {
    if ($lineNumber -lt 30824 -or $lineNumber -gt 93825) {
        $writer.WriteLine($line)
    }
    $lineNumber++
}

$reader.Close()
$writer.Close()

Move-Item -Path $outputFile -Destination $inputFile -Force
Write-Host "Removed line 30824 to 93825 from index.html"
