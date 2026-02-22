# GP5 Plugin Website - Vollständiger Entwurf

## Wissen Sammlung (aus README)

### Was das Plugin tut
GP5 VST Editor ist ein JUCE-basiertes VST3 Instrument für DAWs mit folgenden Fähigkeiten:

**Player Mode:**
- Lädt und spielt GP Dateien (.gp3, .gp4, .gp5, .gp7, .gp8)
- Interaktive Tablatur-Anzeige
- Chord Names über Measures
- Mehrere Tracks mit individuellen Einstellungen (Pan, Volume, Mute/Solo)
- Zoomable Interface
- Click-to-Seek auf der Tablatur

**Editor Mode:**
- Audio-to-Tab Transkription (BasicPitch Neural Network)
  - Sidechain Input aus DAW an Plugin
  - Automatische Tablatur-Erstellung
  - Live MIDI Output mit pitch bend interpolation
- MIDI zu GP5 Konvertierung
- Vollständige Note und Rest Editing

**Sonderfunktionen:**
- Live Finger Position Display (visuelle Fingering-Vorschläge)
- Export zu GP5 mit Metadaten
- Pitch Bend Interpolation für realistische Gitarren-Arpeggio
- Legato / Slide / Vibrato MIDI Control Messages


### Zielgruppe

Primär:
- Cubase Nutzer → einfache SideChain Konfiguration



Zweitplatzierung:

Potential für broader DAW compatibility exists, though technical implementation varies across different music production software environments.


Installation Process:

1. Navigate to project releases on GitHub
2. Access installer via assets section
3. Execute setup through GUI
4. Transfer plugin to DAW's VST3 directory
5. Reload DAW and locate in plugin browser

Development Requirements:
- JUCE framework (version 7.x or later)
- CMake build system (version 3.22+)
- C++17 compatible compiler


I'll complete the partial thought by copying over the next thinking:

Windows: Visual Studio 2019+
macOS: Xcode 12+

Build Process:
1. Clone repository
2. Configure JUCE path in CMakeLists.txt

Continue with build instructions, then summarize the two primary usage modes concisely.

I'll outline the plugin's dual operational modes, highlighting their key differences and setup requirements for effective implementation.

The project requires careful attention to several technical nuances, including feature presentation, DAW compatibility, and user guidance. I'll focus on distilling complex information into clear, actionable website sections that demystify the plugin's capabilities and usage instructions.
</think>Jetzt erstelle ich den React-Frame für deine Website:<tool_call>switch_mode<arg_key>mode_slug</arg_key><arg_value>code