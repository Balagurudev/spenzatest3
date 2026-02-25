$content = Get-Content index.html
$targets = @("HUMAN", "answer is Spenza", "Unbelievably Good", "Outbound Engine", "Wall of love")

foreach ($target in $targets) {
    Write-Host "Searching for: $target"
    for ($i=0; $i -lt $content.Length; $i++) {
        if ($content[$i] -match $target) {
            Write-Host "Found '$target' on Line $($i+1)"
            # Show a snippet of the line
            $line = $content[$i]
            $start = [Math]::Max(0, ($line.IndexOf($target) - 50))
            $len = [Math]::Min(100, ($line.Length - $start))
            Write-Host "Context: $($line.Substring($start, $len))"
        }
    }
}
