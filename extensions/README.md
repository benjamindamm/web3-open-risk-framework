# Regulatory Extensions

Modular regulatory extensions that add jurisdiction-specific compliance capabilities to the Web3 Risk Framework.

##  Directory Structure

```
extensions/
├── README.md                    # This file - repository navigation
├── extensions.md               # PDF documentation - framework overview
├── fidleg/                     # Swiss FIDLEG Extension
│   ├── README.md              # FIDLEG extension overview
│   ├── fidleg.md              # PDF documentation - detailed guide
│   ├── docs/                  # Component-specific documentation
│   └── schema/                # JSON schemas
└── {future-extensions}/       # Additional jurisdictions
```

##  Available Extensions

### Swiss FIDLEG Extension
- **Repository**: [`fidleg/`](./fidleg/) - Extension files and schemas
- **Documentation**: [`fidleg.md`](./fidleg/fidleg.md) - Detailed implementation guide
- **Components**: [`docs/`](./fidleg/docs/) - Risk, indicator, measure, assessment, action guides
- **Schemas**: [`schema/`](./fidleg/schema/) - JSON schema definitions

##  Quick Start

1. **Browse Extensions**: Explore available extensions in their respective directories
2. **Read Documentation**: Check `{extension}.md` files for detailed guides
3. **Review Schemas**: Examine JSON schemas in `schema/` directories
4. **See Examples**: Look at implementation examples in the main catalogue

##  Adding New Extensions

To create a new regulatory extension:

1. **Create directory**: `extensions/{jurisdiction}/`
2. **Add README**: Create overview documentation
3. **Create PDF doc**: Add `{jurisdiction}.md` for PDF generation
4. **Define schemas**: Extend core JSON schemas with jurisdiction-specific fields
5. **Document components**: Provide guides in `docs/` subdirectory
6. **Update this README**: Add your extension to the list above

##  Documentation Types

- **README.md**: Repository navigation and quick reference
- **{extension}.md**: PDF documentation with detailed implementation guides
- **docs/**: Component-specific documentation for developers
- **schema/**: JSON schema definitions for technical implementation