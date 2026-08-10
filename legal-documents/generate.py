# -*- coding: utf-8 -*-
"""
Generates both the editable Markdown source and the designed PDF for the
Talent Onboarding & Representation Agreement, from content.py.

Run:  python generate.py
Outputs:
  Manasvi_Pathak_Talent_Onboarding_Representation_Agreement.pdf
  Manasvi_Pathak_Talent_Onboarding_Representation_Agreement_SOURCE.md
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
    Flowable, KeepTogether, NextPageTemplate, PageBreak, Image, HRFlowable,
)
from reportlab.lib.styles import ParagraphStyle

import content as C

HERE = os.path.dirname(os.path.abspath(__file__))
FONT_DIR = os.path.join(HERE, "assets", "fonts")
LOGO_PATH = os.path.join(HERE, "assets", "logo.png")
PDF_OUT = os.path.join(HERE, "Manasvi_Pathak_Talent_Onboarding_Representation_Agreement.pdf")
MD_OUT = os.path.join(HERE, "Manasvi_Pathak_Talent_Onboarding_Representation_Agreement_SOURCE.md")

# ---------------------------------------------------------------------------
# Fonts
# ---------------------------------------------------------------------------
pdfmetrics.registerFont(TTFont("Inter-Light", os.path.join(FONT_DIR, "Inter-Light.ttf")))
pdfmetrics.registerFont(TTFont("Inter-Regular", os.path.join(FONT_DIR, "Inter-Regular.ttf")))
pdfmetrics.registerFont(TTFont("Inter-Medium", os.path.join(FONT_DIR, "Inter-Medium.ttf")))
pdfmetrics.registerFont(TTFont("Inter-SemiBold", os.path.join(FONT_DIR, "Inter-SemiBold.ttf")))
pdfmetrics.registerFont(TTFont("Inter-Bold", os.path.join(FONT_DIR, "Inter-Bold.ttf")))
pdfmetrics.registerFont(TTFont("JBMono-Regular", os.path.join(FONT_DIR, "JetBrainsMono-Regular.ttf")))
pdfmetrics.registerFont(TTFont("JBMono-Medium", os.path.join(FONT_DIR, "JetBrainsMono-Medium.ttf")))
pdfmetrics.registerFontFamily("Inter", normal="Inter-Regular", bold="Inter-SemiBold",
                               italic="Inter-Regular", boldItalic="Inter-SemiBold")

# ---------------------------------------------------------------------------
# Design tokens (from DESIGN-figma.md), translated for print
# ---------------------------------------------------------------------------
INK = HexColor("#14140f")           # near-black, slightly warm (softer than pure #000 in print)
CANVAS = white
SURFACE_SOFT = HexColor("#f7f7f5")
HAIRLINE = HexColor("#e6e6e6")
BLOCK_MINT = HexColor("#c8e6cd")
BLOCK_LILAC = HexColor("#c5b0f4")
BLOCK_CREAM = HexColor("#f4ecd6")
BLOCK_NAVY = HexColor("#1f1d3d")
INK_MUTED = HexColor("#55554d")
GOLD = HexColor("#b3922c")          # sampled from the logo's gold diagonal

PAGE_W, PAGE_H = A4
MARGIN_L = 24 * mm
MARGIN_R = 24 * mm
MARGIN_TOP = 22 * mm
MARGIN_BOTTOM = 24 * mm
CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R

# ---------------------------------------------------------------------------
# Paragraph styles
# ---------------------------------------------------------------------------
STYLES = {
    "cover_eyebrow": ParagraphStyle("cover_eyebrow", fontName="JBMono-Regular", fontSize=10.5,
                                     leading=13, textColor=INK_MUTED, tracking=0.6,
                                     spaceAfter=14),
    "cover_title": ParagraphStyle("cover_title", fontName="Inter-Bold", fontSize=30, leading=35,
                                   textColor=INK, spaceAfter=6),
    "cover_sub": ParagraphStyle("cover_sub", fontName="Inter-Regular", fontSize=12.5, leading=18,
                                 textColor=INK_MUTED, spaceAfter=0),
    "cover_label": ParagraphStyle("cover_label", fontName="JBMono-Regular", fontSize=8.3,
                                   leading=11, textColor=INK_MUTED, spaceAfter=2),
    "cover_field": ParagraphStyle("cover_field", fontName="Inter-Regular", fontSize=11.5,
                                   leading=20, textColor=INK, spaceAfter=10),
    "cover_manager_name": ParagraphStyle("cover_manager_name", fontName="Inter-SemiBold",
                                          fontSize=13.5, leading=17, textColor=INK, spaceAfter=2),
    "cover_manager_role": ParagraphStyle("cover_manager_role", fontName="Inter-Regular",
                                          fontSize=10, leading=14, textColor=INK_MUTED,
                                          spaceAfter=1),
    "eyebrow": ParagraphStyle("eyebrow", fontName="JBMono-Regular", fontSize=8.6, leading=11,
                               textColor=INK_MUTED, spaceAfter=6),
    "h1": ParagraphStyle("h1", fontName="Inter-Bold", fontSize=18, leading=23, textColor=INK,
                          spaceBefore=0, spaceAfter=10),
    "h3": ParagraphStyle("h3", fontName="Inter-SemiBold", fontSize=11.5, leading=16,
                          textColor=INK, spaceBefore=10, spaceAfter=6),
    "body": ParagraphStyle("body", fontName="Inter-Regular", fontSize=10, leading=15.5,
                            textColor=INK, spaceAfter=8, alignment=TA_LEFT),
    "clause_num": ParagraphStyle("clause_num", fontName="Inter-SemiBold", fontSize=10,
                                  leading=15.5, textColor=INK),
    "bullet": ParagraphStyle("bullet", fontName="Inter-Regular", fontSize=10, leading=15,
                              textColor=INK, spaceAfter=4, leftIndent=18, bulletIndent=4),
    "table_cell_key": ParagraphStyle("table_cell_key", fontName="Inter-SemiBold", fontSize=9.3,
                                      leading=13.5, textColor=INK),
    "table_cell_val": ParagraphStyle("table_cell_val", fontName="Inter-Regular", fontSize=9.3,
                                      leading=13.5, textColor=INK),
    "note": ParagraphStyle("note", fontName="Inter-Regular", fontSize=9.4, leading=14.2,
                            textColor=INK),
    "note_label": ParagraphStyle("note_label", fontName="JBMono-Regular", fontSize=7.6,
                                  leading=10, textColor=INK_MUTED, spaceAfter=4),
    "footer": ParagraphStyle("footer", fontName="JBMono-Regular", fontSize=7.3, leading=9,
                              textColor=INK_MUTED),
    "sig_label": ParagraphStyle("sig_label", fontName="JBMono-Regular", fontSize=8, leading=11,
                                 textColor=INK_MUTED, spaceAfter=2),
    "sig_name": ParagraphStyle("sig_name", fontName="Inter-SemiBold", fontSize=11, leading=15,
                                textColor=INK),
    "sig_meta": ParagraphStyle("sig_meta", fontName="Inter-Regular", fontSize=9.3, leading=13,
                                textColor=INK_MUTED),
}


# ---------------------------------------------------------------------------
# Custom flowables
# ---------------------------------------------------------------------------
class ColorBox(Flowable):
    """A rounded, tinted background box wrapping a Paragraph (or list of them)."""

    def __init__(self, paragraphs, bg_color, pad_x=14, pad_y=11, radius=7,
                 border_color=None, space_before=6, space_after=10):
        super().__init__()
        self.paragraphs = paragraphs if isinstance(paragraphs, list) else [paragraphs]
        self.bg_color = bg_color
        self.pad_x = pad_x
        self.pad_y = pad_y
        self.radius = radius
        self.border_color = border_color
        self.space_before = space_before
        self.space_after = space_after
        self._inner_w = None
        self._para_heights = []

    def wrap(self, availWidth, availHeight):
        self._inner_w = availWidth - 2 * self.pad_x
        total_h = 0
        self._para_heights = []
        for p in self.paragraphs:
            w, h = p.wrap(self._inner_w, availHeight)
            self._para_heights.append(h)
            total_h += h
        gap_between = 4 * max(0, len(self.paragraphs) - 1)
        self._height = total_h + gap_between + 2 * self.pad_y + self.space_before + self.space_after
        self._width = availWidth
        return self._width, self._height

    def draw(self):
        canv = self.canv
        canv.saveState()
        box_h = self._height - self.space_before - self.space_after
        y0 = self.space_after
        canv.setFillColor(self.bg_color)
        if self.border_color:
            canv.setStrokeColor(self.border_color)
            canv.setLineWidth(0.6)
            canv.roundRect(0, y0, self._width, box_h, self.radius, fill=1, stroke=1)
        else:
            canv.roundRect(0, y0, self._width, box_h, self.radius, fill=1, stroke=0)
        canv.restoreState()
        cursor_y = y0 + box_h - self.pad_y
        for p, h in zip(self.paragraphs, self._para_heights):
            cursor_y -= h
            p.drawOn(canv, self.pad_x, cursor_y)
            cursor_y -= 4


class SectionRule(Flowable):
    """Thin hairline rule used as a quiet section separator."""

    def __init__(self, width, color=HAIRLINE, thickness=0.75, space_before=2, space_after=14):
        super().__init__()
        self._w = width
        self.color = color
        self.thickness = thickness
        self.space_before = space_before
        self.space_after = space_after

    def wrap(self, availWidth, availHeight):
        self._width = availWidth
        self._height = self.thickness + self.space_before + self.space_after
        return self._width, self._height

    def draw(self):
        self.canv.saveState()
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.thickness)
        y = self.space_after
        self.canv.line(0, y, self._width, y)
        self.canv.restoreState()


# ---------------------------------------------------------------------------
# Block renderers -> list[Flowable]
# ---------------------------------------------------------------------------
def render_p(text):
    return Paragraph(text, STYLES["body"])


def render_h3(text):
    return Paragraph(text, STYLES["h3"])


def render_ul(items):
    flows = []
    for item in items:
        flows.append(Paragraph(item, STYLES["bullet"], bulletText="•"))
    return flows


def render_clauses(items, section_id):
    flows = []
    for i, item in enumerate(items, start=1):
        txt = f'<font name="Inter-SemiBold">{section_id}.{i}</font>&nbsp;&nbsp;{item}'
        flows.append(Paragraph(txt, ParagraphStyle(
            f"clause_{section_id}_{i}", parent=STYLES["body"], leftIndent=16, firstLineIndent=-16,
            spaceAfter=7)))
    return flows


def render_note(text):
    label = Paragraph("NOTE", STYLES["note_label"])
    body = Paragraph(text, STYLES["note"])
    return [ColorBox([label, body], BLOCK_CREAM, border_color=None)]


def render_table(rows):
    data = []
    for k, v in rows:
        data.append([Paragraph(k, STYLES["table_cell_key"]), Paragraph(v, STYLES["table_cell_val"])])
    col0_w = CONTENT_W * 0.28
    col1_w = CONTENT_W - col0_w
    t = Table(data, colWidths=[col0_w, col1_w])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BACKGROUND", (0, 0), (0, -1), SURFACE_SOFT),
        ("LINEBELOW", (0, 0), (-1, -2), 0.6, HAIRLINE),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
        ("LEFTPADDING", (0, 0), (0, -1), 10),
        ("LEFTPADDING", (1, 0), (1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
    ]))
    return [t, Spacer(1, 8)]


def render_block(kind, payload, section_id):
    """Render a single content block into its list of flowables."""
    if kind == "p":
        return [render_p(payload)]
    elif kind == "h3":
        return [render_h3(payload)]
    elif kind == "ul":
        return render_ul(payload) + [Spacer(1, 4)]
    elif kind == "clauses":
        return render_clauses(payload, section_id) + [Spacer(1, 2)]
    elif kind == "note":
        return render_note(payload)
    elif kind == "table":
        return render_table(payload)
    else:
        raise ValueError(f"Unknown block kind: {kind}")


def render_section(section):
    flows = []
    blocks = section["blocks"]
    kinds = [kind for kind, _ in blocks]
    chunks = [render_block(kind, payload, section["id"]) for kind, payload in blocks]

    # Merge every h3 sub-heading with the chunk immediately following it, and merge
    # the section heading with the first chunk, so nothing is orphaned across a
    # page break with no content visible underneath it.
    merged = []
    i = 0
    while i < len(chunks):
        if kinds[i] == "h3" and i + 1 < len(chunks):
            merged.append(chunks[i] + chunks[i + 1])
            i += 2
        else:
            merged.append(chunks[i])
            i += 1

    head = [
        Paragraph(section["eyebrow"], STYLES["eyebrow"]),
        Paragraph(section["title"], STYLES["h1"]),
    ]
    if merged:
        merged[0] = head + merged[0]
    else:
        merged = [head]

    for group in merged:
        flows.append(KeepTogether(group))

    flows.append(Spacer(1, 6))
    flows.append(SectionRule(CONTENT_W))
    return flows


# ---------------------------------------------------------------------------
# Cover page
# ---------------------------------------------------------------------------
def build_cover_flowables():
    flows = []
    flows.append(Spacer(1, 6 * mm))

    logo = Image(LOGO_PATH, width=46 * mm, height=46 * mm * (283 / 800))
    logo.hAlign = "LEFT"
    flows.append(logo)
    flows.append(Spacer(1, 16 * mm))

    flows.append(Paragraph("TALENT ONBOARDING &amp; REPRESENTATION AGREEMENT",
                            ParagraphStyle("cover_eyebrow2", parent=STYLES["cover_eyebrow"],
                                           fontSize=10, spaceAfter=10)))
    flows.append(Paragraph("Talent Onboarding &amp;<br/>Representation Agreement",
                            STYLES["cover_title"]))
    flows.append(Spacer(1, 4))
    flows.append(Paragraph(C.COVER_INTRO, STYLES["cover_sub"]))
    flows.append(Spacer(1, 16 * mm))

    # Prepared For block
    prepared = [
        Paragraph("PREPARED FOR", STYLES["cover_label"]),
        Spacer(1, 6),
        Paragraph("Name:  ______________________________________", STYLES["cover_field"]),
        Paragraph("Email:  ______________________________________", STYLES["cover_field"]),
    ]
    flows.append(ColorBox(prepared, SURFACE_SOFT, pad_y=14, space_after=10))

    # Talent Manager block
    manager = [
        Paragraph("TALENT MANAGER", STYLES["cover_label"]),
        Spacer(1, 6),
        Paragraph(C.MANAGER["name"], STYLES["cover_manager_name"]),
        Paragraph(C.MANAGER["role_line"], STYLES["cover_manager_role"]),
        Paragraph(C.MANAGER["identity_line"], STYLES["cover_manager_role"]),
    ]
    flows.append(ColorBox(manager, BLOCK_MINT, pad_y=14, space_after=10))

    flows.append(Paragraph("Agreement Date:  ______________________________________",
                            STYLES["cover_field"]))
    return flows


# ---------------------------------------------------------------------------
# Signature page
# ---------------------------------------------------------------------------
def build_signature_flowables():
    flows = []
    flows.append(Paragraph("ACKNOWLEDGEMENT &amp; SIGNATURES", STYLES["eyebrow"]))
    flows.append(Paragraph("Signatures", STYLES["h1"]))
    flows.append(Paragraph(C.SIGNATURE_INTRO, STYLES["body"]))
    flows.append(Spacer(1, 14))

    def sig_block(title_text, lines, bg=SURFACE_SOFT):
        content = [Paragraph(title_text, STYLES["cover_label"]), Spacer(1, 8)]
        for label in lines:
            content.append(Paragraph(f"{label}:", STYLES["sig_label"]))
            content.append(Spacer(1, 14))
            content.append(HRFlowable(width="100%", thickness=0.7, color=HAIRLINE))
            content.append(Spacer(1, 10))
        return ColorBox(content, bg, pad_y=14, space_after=14)

    flows.append(sig_block("TALENT", ["Full Name", "Signature", "Date", "Email", "Phone"]))

    manager_content = [
        Paragraph("TALENT MANAGER", STYLES["cover_label"]),
        Spacer(1, 8),
        Paragraph(C.MANAGER["name"], STYLES["sig_name"]),
        Paragraph(C.MANAGER["role_line"], STYLES["sig_meta"]),
        Spacer(1, 14),
        Paragraph("Signature:", STYLES["sig_label"]),
        Spacer(1, 14),
        HRFlowable(width="100%", thickness=0.7, color=HAIRLINE),
        Spacer(1, 10),
        Paragraph("Date:", STYLES["sig_label"]),
        Spacer(1, 14),
        HRFlowable(width="100%", thickness=0.7, color=HAIRLINE),
        Spacer(1, 10),
    ]
    flows.append(ColorBox(manager_content, BLOCK_MINT, pad_y=14, space_after=14))

    flows.append(sig_block(
        "PARENT / LEGAL GUARDIAN — required only if the Talent is a minor (see Section 21)",
        ["Name", "Relationship to Talent", "Signature", "Date", "Contact"], bg=BLOCK_CREAM))

    return flows


# ---------------------------------------------------------------------------
# Page templates (footer / page numbers)
# ---------------------------------------------------------------------------
_page_state = {"total_pages": None}


def _draw_footer(canvas, doc, show_pagenum=True):
    canvas.saveState()
    canvas.setStrokeColor(HAIRLINE)
    canvas.setLineWidth(0.6)
    y_line = MARGIN_BOTTOM - 6
    canvas.line(MARGIN_L, y_line, PAGE_W - MARGIN_R, y_line)

    canvas.setFont("JBMono-Regular", 7.3)
    canvas.setFillColor(INK_MUTED)
    canvas.drawString(MARGIN_L, y_line - 12, C.DOC_SHORT_TITLE.upper())

    if show_pagenum:
        canvas.drawRightString(PAGE_W - MARGIN_R, y_line - 12,
                                f"PAGE {doc.page} OF {{TOTAL}}")

    canvas.drawCentredString(PAGE_W / 2, y_line - 12, "CONFIDENTIAL")
    canvas.restoreState()


def on_cover_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(BLOCK_LILAC)
    canvas.rect(0, PAGE_H - 10 * mm, PAGE_W, 10 * mm, fill=1, stroke=0)
    canvas.setFillColor(GOLD)
    canvas.rect(0, PAGE_H - 10 * mm, PAGE_W, 1.2 * mm, fill=1, stroke=0)
    canvas.restoreState()
    canvas.setFont("JBMono-Regular", 7.3)
    canvas.setFillColor(INK_MUTED)
    canvas.drawCentredString(PAGE_W / 2, MARGIN_BOTTOM - 18,
                              f"{C.COMPANY['name'].upper()}  |  {C.COMPANY['website']}  |  CONFIDENTIAL")


def on_content_page(canvas, doc):
    _draw_footer(canvas, doc, show_pagenum=True)


# ---------------------------------------------------------------------------
# Build document
# ---------------------------------------------------------------------------
def build_pdf():
    doc = BaseDocTemplate(
        PDF_OUT, pagesize=A4,
        leftMargin=MARGIN_L, rightMargin=MARGIN_R,
        topMargin=MARGIN_TOP, bottomMargin=MARGIN_BOTTOM,
        title=C.DOC_TITLE, author=C.MANAGER["name"],
        subject="Talent Onboarding & Representation Agreement",
    )

    cover_frame = Frame(MARGIN_L, MARGIN_BOTTOM, CONTENT_W, PAGE_H - MARGIN_TOP - MARGIN_BOTTOM,
                         id="cover_frame", topPadding=0, bottomPadding=0)
    content_frame = Frame(MARGIN_L, MARGIN_BOTTOM, CONTENT_W, PAGE_H - MARGIN_TOP - MARGIN_BOTTOM,
                           id="content_frame", topPadding=0, bottomPadding=0)

    doc.addPageTemplates([
        PageTemplate(id="Cover", frames=[cover_frame], onPage=on_cover_page),
        PageTemplate(id="Content", frames=[content_frame], onPage=on_content_page),
    ])

    story = []
    story.extend(build_cover_flowables())
    story.append(NextPageTemplate("Content"))
    story.append(PageBreak())

    for section in C.SECTIONS:
        story.extend(render_section(section))

    story.append(PageBreak())
    story.extend(build_signature_flowables())

    doc.build(story)

    # Patch in the real total page count (reportlab doesn't know it up front).
    _patch_total_pages()


def _patch_total_pages():
    from pypdf import PdfReader, PdfWriter
    reader = PdfReader(PDF_OUT)
    total = len(reader.pages)
    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)
    with open(PDF_OUT, "wb") as f:
        writer.write(f)
    # Re-render with the correct total burned into the footer text.
    _rebuild_with_total(total)


def _rebuild_with_total(total):
    def content_page_final(canvas, doc):
        canvas.saveState()
        canvas.setStrokeColor(HAIRLINE)
        canvas.setLineWidth(0.6)
        y_line = MARGIN_BOTTOM - 6
        canvas.line(MARGIN_L, y_line, PAGE_W - MARGIN_R, y_line)
        canvas.setFont("JBMono-Regular", 7.3)
        canvas.setFillColor(INK_MUTED)
        canvas.drawString(MARGIN_L, y_line - 12, C.DOC_SHORT_TITLE.upper())
        canvas.drawRightString(PAGE_W - MARGIN_R, y_line - 12, f"PAGE {doc.page - 1} OF {total - 1}")
        canvas.drawCentredString(PAGE_W / 2, y_line - 12, "CONFIDENTIAL")
        canvas.restoreState()

    doc = BaseDocTemplate(
        PDF_OUT, pagesize=A4,
        leftMargin=MARGIN_L, rightMargin=MARGIN_R,
        topMargin=MARGIN_TOP, bottomMargin=MARGIN_BOTTOM,
        title=C.DOC_TITLE, author=C.MANAGER["name"],
        subject="Talent Onboarding & Representation Agreement",
    )
    cover_frame = Frame(MARGIN_L, MARGIN_BOTTOM, CONTENT_W, PAGE_H - MARGIN_TOP - MARGIN_BOTTOM,
                         id="cover_frame2", topPadding=0, bottomPadding=0)
    content_frame = Frame(MARGIN_L, MARGIN_BOTTOM, CONTENT_W, PAGE_H - MARGIN_TOP - MARGIN_BOTTOM,
                           id="content_frame2", topPadding=0, bottomPadding=0)
    doc.addPageTemplates([
        PageTemplate(id="Cover", frames=[cover_frame], onPage=on_cover_page),
        PageTemplate(id="Content", frames=[content_frame], onPage=content_page_final),
    ])
    story = []
    story.extend(build_cover_flowables())
    story.append(NextPageTemplate("Content"))
    story.append(PageBreak())
    for section in C.SECTIONS:
        story.extend(render_section(section))
    story.append(PageBreak())
    story.extend(build_signature_flowables())
    doc.build(story)


# ---------------------------------------------------------------------------
# Markdown export (the "editable source" deliverable)
# ---------------------------------------------------------------------------
def md_escape(text):
    return text.replace("&amp;", "&").replace("&bull;", "-").replace("&nbsp;", " ")


def build_markdown():
    lines = []
    lines.append(f"# {C.DOC_TITLE}\n")
    lines.append(f"> {C.COVER_INTRO}\n")
    lines.append("---\n")
    lines.append("**Prepared For**\n")
    lines.append("Name: _______________________________\n")
    lines.append("Email: _______________________________\n")
    lines.append("**Talent Manager**\n")
    lines.append(f"{C.MANAGER['name']}  ")
    lines.append(f"{C.MANAGER['role_line']}  ")
    lines.append(f"{C.MANAGER['identity_line']}\n")
    lines.append("**Agreement Date:** _______________________________\n")
    lines.append("---\n")

    for section in C.SECTIONS:
        lines.append(f"\n## {section['id']}. {section['title']}\n")
        for kind, payload in section["blocks"]:
            if kind == "p":
                lines.append(md_escape(payload) + "\n")
            elif kind == "h3":
                lines.append(f"### {md_escape(payload)}\n")
            elif kind == "ul":
                for item in payload:
                    lines.append(f"- {md_escape(item)}")
                lines.append("")
            elif kind == "clauses":
                for i, item in enumerate(payload, start=1):
                    lines.append(f"**{section['id']}.{i}** {md_escape(item)}\n")
            elif kind == "note":
                lines.append(f"> **NOTE:** {md_escape(payload)}\n")
            elif kind == "table":
                lines.append("| | |")
                lines.append("|---|---|")
                for k, v in payload:
                    lines.append(f"| **{md_escape(k)}** | {md_escape(v)} |")
                lines.append("")

    lines.append("\n---\n")
    lines.append("## Acknowledgement & Signatures\n")
    lines.append(md_escape(C.SIGNATURE_INTRO) + "\n")
    lines.append("**TALENT**\n\nFull Name: ____________________  Signature: ____________________  "
                  "Date: ____________________\n\nEmail: ____________________  Phone: ____________________\n")
    lines.append("**TALENT MANAGER**\n\n" + C.MANAGER["name"] + "  \n" + C.MANAGER["role_line"] +
                  "\n\nSignature: ____________________  Date: ____________________\n")
    lines.append("**PARENT / LEGAL GUARDIAN** (required only if the Talent is a minor — see Section 21)\n\n"
                  "Name: ____________________  Relationship: ____________________\n\n"
                  "Signature: ____________________  Date: ____________________  "
                  "Contact: ____________________\n")
    lines.append("\n---\n")
    lines.append(f"*{C.COMPANY['name']} · GST {C.COMPANY['gst']} · {C.COMPANY['address']} · "
                  f"{C.COMPANY['website']}*\n")

    with open(MD_OUT, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))


if __name__ == "__main__":
    build_markdown()
    build_pdf()
    print("Done.")
    print("PDF:", PDF_OUT)
    print("MD :", MD_OUT)
