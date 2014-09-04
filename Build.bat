@echo off

set "files_dir=%~dp0\src"
set "result_file=%~dp0\build\library.js"

pushd %files_dir%


setlocal EnableDelayedExpansion

set "copy_list=+"

for %%f in (*) do (
    if "%%~nf" NEQ "starting" if "%%~nf" NEQ "ending" (
        set "copy_list=!copy_list!"%%~nxf"+"
    )
)

copy /B starting.js!copy_list!ending.js /D %result_file%
popd
endlocal

java -jar %~dp0\compiler.jar  --js %~dp0\build\library.js --js_output_file %~dp0\build\library-min.js 
pause