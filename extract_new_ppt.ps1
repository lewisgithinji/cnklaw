
$pptPath = "F:\Projects\cnk-law-website\public\CNK- NEW COMPANY PROFILE.ppt"
$outputPath = "F:\Projects\cnk-law-website\tmp_new_ppt_content.txt"

try {
    $ppt = New-Object -ComObject PowerPoint.Application
    $presentation = $ppt.Presentations.Open($pptPath, [Microsoft.Office.Core.MsoTriState]::msoTrue, [Microsoft.Office.Core.MsoTriState]::msoFalse, [Microsoft.Office.Core.MsoTriState]::msoFalse)
    
    $content = ""
    foreach ($slide in $presentation.Slides) {
        $content += "--- Slide $($slide.SlideNumber) ---`r`n"
        foreach ($shape in $slide.Shapes) {
            if ($shape.HasTextFrame -and $shape.TextFrame.HasText) {
                $content += $shape.TextFrame.TextRange.Text + "`r`n"
            }
        }
    }
    
    $content | Out-File -FilePath $outputPath
    $presentation.Close()
    $ppt.Quit()
    Write-Host "Success: Content extracted to $outputPath"
}
catch {
    Write-Host "Error: $($_.Exception.Message)"
    if ($ppt) { $ppt.Quit() }
}
