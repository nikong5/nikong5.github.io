<?php

/**
 * @license    GPL 2 (http://www.gnu.org/licenses/gpl.html)
 *
 * @author Kenneth Schack Banner <kescba@gmail.com>
 * @author Jon Theil Nielsen <jontheil@gmail.com>
 * @author Lars Næsbye Christensen <larsnaesbye@stud.ku.dk>
 * @author Kalle Sommer Nielsen <kalle@php.net>
 * @author Esben Laursen <hyber@hyber.dk>
 * @author Harith <haj@berlingske.dk>
 * @author Daniel Ejsing-Duun <dokuwiki@zilvador.dk>
 * @author Erik Bjørn Pedersen <erik.pedersen@shaw.ca>
 * @author rasmus <rasmus@kinnerup.com>
 * @author Mikael Lyngvig <mikael@lyngvig.org>
 * @author Jacob Palm <mail@jacobpalm.dk>
 */
$lang['menu']                  = 'Opsætningsindstillinger';
$lang['error']                 = 'Indstillingerne blev ikke opdateret på grund af en ugyldig værdi, Gennemse venligst dine ændringer og gem dem igen.
                       <br />Ugyldige værdier vil blive rammet ind med rødt.';
$lang['updated']               = 'Indstillingerne blev opdateret korrekt.';
$lang['nochoice']              = '(ingen andre valgmuligheder)';
$lang['locked']                = 'Indstillingsfilen kunne ikke opdateres, Hvis dette er en fejl, <br />
sørg da for at navnet på den lokale indstillingsfil samt dens rettigheder er korrekte.';
$lang['danger']                = 'Fare: Ændring af denne mulighed kan gøre din wiki og opsætningsoversigt utilgængelige.';
$lang['warning']               = 'Advarsel: Ændring af denne mulighed kan forårsage utilsigtet opførsel.';
$lang['security']              = 'Sikkerhedsadvarsel: Ændring af denne mulighed kan forårsage en sikkerhedsrisiko.';
$lang['_configuration_manager'] = 'Opsætningsstyring';
$lang['_header_dokuwiki']      = 'DokuWiki indstillinger';
$lang['_header_plugin']        = 'Udvidelsesindstillinger';
$lang['_header_template']      = 'Skabelonindstillinger';
$lang['_header_undefined']     = 'Ikke satte indstillinger';
$lang['_basic']                = 'Grundindstillinger';
$lang['_display']              = 'Synlighedsindstillinger';
$lang['_authentication']       = 'Bekræftelsesindstillinger';
$lang['_anti_spam']            = 'Trafikkontrolsindstillinger';
$lang['_editing']              = 'Redigeringsindstillinger';
$lang['_links']                = 'Henvisningsindstillinger';
$lang['_media']                = 'Medieindstillinger';
$lang['_notifications']        = 'Notificeringsindstillinger';
$lang['_advanced']             = 'Avancerede indstillinger';
$lang['_network']              = 'Netværksindstillinger';
$lang['_msg_setting_undefined'] = 'Ingen indstillingsmetadata.';
$lang['_msg_setting_no_class'] = 'Ingen indstillingsklasse.';
$lang['_msg_setting_no_default'] = 'Ingen standardværdi.';
$lang['title']                 = 'Wiki titel';
$lang['start']                 = 'Startsidens navn';
$lang['lang']                  = 'Sprog';
$lang['template']              = 'Skabelon';
$lang['tagline']               = 'Tagline (hvis templaten understøtter det)';
$lang['sidebar']               = 'Sidebar side navne (hvis templaten understøtter det).';
$lang['license']               = 'Under hvilken licens skal dit indhold frigives?';
$lang['savedir']               = 'Katalog til opbevaring af data';
$lang['basedir']               = 'Grundkatalog';
$lang['baseurl']               = 'Grundadresse';
$lang['cookiedir']             = 'Cookie sti.  Hvis tom, bruges baseurl.';
$lang['dmode']                 = 'Katalogoprettelsestilstand';
$lang['fmode']                 = 'Filoprettelsestilstand';
$lang['allowdebug']            = 'Tillad fejlretning <b>slå fra hvis unødvendig!</b>';
$lang['recent']                = 'Nylige ændringer';
$lang['recent_days']           = 'Hvor mange nye ændringer der skal beholdes (dage)';
$lang['breadcrumbs']           = 'Stilængde';
$lang['youarehere']            = 'Hierarkisk sti';
$lang['fullpath']              = 'Vis den fulde sti til siderne i bundlinjen';
$lang['typography']            = 'Typografiske erstatninger';
$lang['dformat']               = 'Datoformat (se PHP\'s <a href="http://php.net/strftime">strftime</a>-funktion)';
$lang['signature']             = 'Underskrift';
$lang['showuseras']            = 'Hvad skal vises når den sidste bruger, der har ændret siden, fremstilles';
$lang['toptoclevel']           = 'Øverste niveau for indholdsfortegnelse';
$lang['tocminheads']           = 'Mindste antal overskrifter for at danne Indholdsfortegnelsen';
$lang['maxtoclevel']           = 'Højeste niveau for indholdsfortegnelse';
$lang['maxseclevel']           = 'Højeste niveau for redigering af sektioner';
$lang['camelcase']             = 'Brug KamelKasse til henvisninger';
$lang['deaccent']              = 'Pæne sidenavne';
$lang['useheading']            = 'Brug første overskrift til sidenavne';
$lang['sneaky_index']          = 'DokuWiki vil som standard vise alle navnerum i indholdsfortegnelsen. Ved at slå denne valgmulighed til vil skjule de navnerum, hvor brugeren ikke har læsetilladelse. Dette kan føre til, at tilgængelige undernavnerum bliver skjult. Ligeledes kan det også gøre indholdsfortegnelsen ubrugelig med visse ACL-opsætninger.';
$lang['hidepages']             = 'Skjul lignende sider (almindelige udtryk)';
$lang['useacl']                = 'Benyt adgangskontrollister';
$lang['autopasswd']            = 'Generer adgangskoder automatisk';
$lang['authtype']              = 'Bekræftelsesgrundlag';
$lang['passcrypt']             = 'Krypteringsmetode for adgangskoder';
$lang['defaultgroup']          = 'Standardgruppe';
$lang['superuser']             = 'Superbruger';
$lang['manager']               = 'Bestyrer - en gruppe eller bruger med adgang til bestemte styrende funktioner';
$lang['profileconfirm']        = 'Bekræft profilændringer med kodeord';
$lang['rememberme']            = 'Tillad varige datafiler for brugernavne (husk mig)';
$lang['disableactions']        = 'Slå DokuWiki-muligheder fra';
$lang['disableactions_check']  = 'Tjek';
$lang['disableactions_subscription'] = 'Tliføj/Fjern opskrivning';
$lang['disableactions_wikicode'] = 'Vis kilde/Eksporter grundkode';
$lang['disableactions_other']  = 'Andre muligheder (kommasepareret)';
$lang['auth_security_timeout'] = 'Tidsudløb for bekræftelse (sekunder)';
$lang['securecookie']          = 'Skal datafiler skabt af HTTPS kun sendes af HTTPS gennem browseren? Slå denne valgmulighed fra hvis kun brugen af din wiki er SSL-beskyttet, mens den almindelige tilgang udefra ikke er sikret.';
$lang['remote']                = 'Aktivér fjern APIet.  Dette tillader andre programmer at tilgå wikien via XML-RPC eller andre mekanismer.';
$lang['remoteuser']            = 'Begræns fjern API adgang til den kommaseparerede liste af grupper eller brugere angivet her.  Efterlad tom for at give adgang til alle.';
$lang['usewordblock']          = 'Hindr uønsket brug med en ordliste';
$lang['relnofollow']           = 'Brug rel="nofollow" til udadgående henvisninger';
$lang['indexdelay']            = 'Tidsforsinkelse før katalogisering (sek.)';
$lang['mailguard']             = 'Slør elektroniske adresser';
$lang['iexssprotect']          = 'Gennemse oplagte filer for mulig skadelig JavaScript- eller HTML-kode.';
$lang['usedraft']              = 'Gem automatisk en kladde under redigering';
$lang['htmlok']                = 'Tillad indlejret HTML';
$lang['phpok']                 = 'Tillad indlejret PHP';
$lang['locktime']              = 'Længste levetid for låsefiler (sek)';
$lang['cachetime']             = 'Længste levetid for "cache" (sek)';
$lang['target____wiki']        = 'Målvindue for indre henvisninger';
$lang['target____interwiki']   = 'Målvindue for egne wikihenvisninger ';
$lang['target____extern']      = 'Målvindue for udadgående henvisninger';
$lang['target____media']       = 'Målvindue for mediehenvisninger';
$lang['target____windows']     = 'Målvindue til Windows-henvisninger';
$lang['mediarevisions']        = 'Akvtivér media udgaver?';
$lang['refcheck']              = 'Mediehenvisningerkontrol';
$lang['gdlib']                 = 'Udgave af GD Lib';
$lang['im_convert']            = 'Sti til ImageMagick\'s omdannerværktøj';
$lang['jpg_quality']           = 'JPG komprimeringskvalitet (0-100)';
$lang['fetchsize']             = 'Største antal (bytes) fetch.php må hente udefra';
$lang['subscribers']           = 'Slå understøttelse af abonnement på sider til';
$lang['subscribe_time']        = 'Tid der går før abonnementlister og nyhedsbreve er sendt (i sekunder). Denne værdi skal være mindre end den tid specificeret under recent_days.';
$lang['notify']                = 'Send ændringsmeddelelser til denne e-adresse';
$lang['registernotify']        = 'Send info om nyoprettede brugere til denne e-adresse';
$lang['mailfrom']              = 'E-adresse til brug for automatiske meddelelser';
$lang['mailprefix']            = 'Præfiks på email subject for automastiske mails.  Efterlad blank for at bruge wiki titlen.';
$lang['htmlmail']              = 'Send pænere, men større HTML multipart mails.  Deaktivér for at sende rene tekst mails.';
$lang['sitemap']               = 'Generer Google-"sitemap" (dage)';
$lang['rss_type']              = 'Type af XML-liste';
$lang['rss_linkto']            = 'XML-liste henviser til';
$lang['rss_content']           = 'Hvad skal der vises i XML-listepunkteren?';
$lang['rss_update']            = 'XML-listens opdateringsinterval (sek)';
$lang['rss_show_summary']      = 'XML-liste vis referat i overskriften';
$lang['rss_media']             = 'Hvilke ændringer skal vises i XML listen?';
$lang['updatecheck']           = 'Kig efter opdateringer og sikkerhedsadvarsler? DokuWiki er nødt til at kontakte update.dokuwiki.org for at tilgå denne funktion.';
$lang['userewrite']            = 'Brug pæne netadresser';
$lang['useslash']              = 'Brug skråstreg som navnerumsdeler i netadresser';
$lang['sepchar']               = 'Orddelingstegn til sidenavne';
$lang['canonical']             = 'Benyt fuldt kanoniske netadresser';
$lang['fnencode']              = 'Metode for indkodning af ikke ASCII filnavne';
$lang['autoplural']            = 'Tjek for flertalsendelser i henvisninger';
$lang['compression']           = 'Pakningsmetode for attic-filer';
$lang['gzip_output']           = 'Benyt gzip-Content-Encoding (indholdskryptering) til XHTML';
$lang['compress']              = 'Komprimer CSS- og JavaScript-filer';
$lang['send404']               = 'Send "HTTP 404/Page Not Found" for ikke-eksisterende sider';
$lang['broken_iua']            = 'Er funktionen "ignore_user_abort" uvirksom på dit system? Dette kunne forårsage en ikke virkende søgeoversigt. IIS+PHP/CGI er kendt for ikke at virke. Se <a href="http://bugs.splitbrain.org/?do=details&amp;task_id=852">Fejl 852</a> for flere oplysninger.';
$lang['xsendfile']             = 'Brug hovedfilen til X-Sendfile for at få netserveren til at sende statiske filer? Din netserver skal understøtte dette for at bruge det.';
$lang['renderer_xhtml']        = 'Udskriver der skal bruges til størstedelen af wiki-udskriften (XHTML)';
$lang['renderer__core']        = '%s (dokuwiki-kerne)';
$lang['renderer__plugin']      = '%s (udvidelse)';
$lang['proxy____host']         = 'Proxy-servernavn';
$lang['proxy____port']         = 'Proxy-port';
$lang['proxy____user']         = 'Proxy-brugernavn';
$lang['proxy____pass']         = 'Proxy-kodeord';
$lang['proxy____ssl']          = 'Brug SSL til at forbinde til proxy';
$lang['proxy____except']       = 'Regular expression til at matche URL\'er for hvilke proxier der skal ignores';
$lang['license_o_']            = 'Ingen valgt';
$lang['typography_o_0']        = 'ingen';
$lang['typography_o_1']        = 'Kun gåseøjne';
$lang['typography_o_2']        = 'Tillader enkelttegnscitering (vil måske ikke altid virke)';
$lang['userewrite_o_0']        = 'ingen';
$lang['userewrite_o_1']        = '.htaccess';
$lang['userewrite_o_2']        = 'Dokuwiki indre';
$lang['deaccent_o_0']          = 'fra';
$lang['deaccent_o_1']          = 'fjern accenttegn';
$lang['deaccent_o_2']          = 'romaniser';
$lang['gdlib_o_0']             = 'GD Lib ikke tilstede';
$lang['gdlib_o_1']             = 'Udgave 1.x';
$lang['gdlib_o_2']             = 'automatisk sondering';
$lang['rss_type_o_rss']        = 'RSS 0.91';
$lang['rss_type_o_rss1']       = 'RSS 1.0';
$lang['rss_type_o_rss2']       = 'RSS 2.0';
$lang['rss_type_o_atom']       = 'Atom 0.3';
$lang['rss_type_o_atom1']      = 'Atom 1.0';
$lang['rss_content_o_abstract'] = 'Abstrakt';
$lang['rss_content_o_diff']    = '"Unified Diff" (Sammensat)';
$lang['rss_content_o_htmldiff'] = 'HTML-formateret diff-tabel';
$lang['rss_content_o_html']    = 'Fuldt HTML-sideindhold';
$lang['rss_linkto_o_diff']     = 'liste over forskelle';
$lang['rss_linkto_o_page']     = 'den redigerede side';
$lang['rss_linkto_o_rev']      = 'liste over ændringer';
$lang['rss_linkto_o_current']  = 'den nuværende side';
$lang['compression_o_0']       = 'ingen';
$lang['compression_o_gz']      = 'gzip';
$lang['compression_o_bz2']     = 'bz2';
$lang['xsendfile_o_0']         = 'brug ikke';
$lang['xsendfile_o_1']         = 'Proprietær lighttpd-hovedfil (før udgave 1.5)';
$lang['xsendfile_o_2']         = 'Standard X-Sendfile-hovedfil';
$lang['xsendfile_o_3']         = 'Proprietær Nginx X-Accel-Redirect hovedfil';
$lang['showuseras_o_loginname'] = 'Brugernavn';
$lang['showuseras_o_username'] = 'Brugerens fulde navn';
$lang['showuseras_o_email']    = 'Brugerens e-adresse (ændret i forhold til mailguard-indstillingerne)';
$lang['showuseras_o_email_link'] = 'Brugers e-adresse som en mailto:-henvisning';
$lang['useheading_o_0']        = 'Aldrig';
$lang['useheading_o_navigation'] = 'Kun navigering';
$lang['useheading_o_content']  = 'Kun wiki-indhold';
$lang['useheading_o_1']        = 'Altid';
$lang['readdircache']          = 'Maksimum alder for readdir hukommelse (sek)';
