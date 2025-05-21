# Decisions log

## Directory structure

Chatgpt suggested a directory structure for the Flutter app, this is up for change.

```
lib/
├── main.dart                 # Entry point
├── app.dart                  # App widget (optional)
├── routes/                   # GoRouter or route definitions
│   └── app_router.dart
├── pages/                    # UI screens (HomePage, AboutPage, etc.)
│   ├── home_page.dart
│   └── contact_page.dart
├── widgets/                  # Reusable widgets (buttons, cards, etc.)
│   └── custom_button.dart
├── models/                   # Data models (e.g., Article, User)
│   └── article.dart
├── services/                 # API or local services (e.g., Markdown loader)
│   └── markdown_service.dart
├── config/                   # App config (e.g., markdown TOC YAML)
│   └── articles_config.yaml
├── themes/                   # Theme & styles
│   └── app_theme.dart
└── utils/                    # Helpers, extensions, constants
    └── date_format.dart
```