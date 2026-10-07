#!/data/data/com.termux/files/usr/bin/bash
cd "$(dirname "$0")" && git add -A && git commit -qm "update ${1:-site}" ; git push -u origin main
