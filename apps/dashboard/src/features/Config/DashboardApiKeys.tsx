'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@synapse/ui';
import { Alert, AlertDescription } from '@synapse/ui';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@synapse/ui';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@synapse/ui';
import { Switch } from '@synapse/ui';
import { dashboardDataService } from '../../services/DashboardDataService';
import type {
  ForexCredentials,
  ForexConnectionStatus,
  BybitConnectionStatus,
  ApiCredentials,
} from '../../services/DashboardDataService';
import TradingAccountsManager from './components/TradingAccountsManager';

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface User {
  id: string;
  email: string;
  role?: string;
}

interface DashboardApiKeysProps {
  user: User;
}

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const DashboardApiKeys: React.FC<DashboardApiKeysProps> = ({ user }) => {
  const { t } = useTranslation();
  const isDeveloper = user.role === 'developer' || user.role === 'admin';

  // ---------------------------------------------------------------------------
  // Forex / MetaAPI state
  // ---------------------------------------------------------------------------
  const [forexToken, setForexToken] = useState('');
  const [forexAccountId, setForexAccountId] = useState('');
  const [forexPlatform, setForexPlatform] = useState<'mt4' | 'mt5'>('mt5');
  const [forexTradingMode, setForexTradingMode] = useState<'live' | 'demo'>('demo');
  const [forexStatus, setForexStatus] = useState<ForexConnectionStatus | null>(null);
  const [forexLoading, setForexLoading] = useState(false);
  const [forexEditing, setForexEditing] = useState(false);
  const [forexDeleteDialogOpen, setForexDeleteDialogOpen] = useState(false);
  const [forexMessage, setForexMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // ---------------------------------------------------------------------------
  // Bybit state
  // ---------------------------------------------------------------------------
  const [bybitApiKey, setBybitApiKey] = useState('');
  const [bybitApiSecret, setBybitApiSecret] = useState('');
  const [bybitKeyName, setBybitKeyName] = useState('');
  const [bybitStatus, setBybitStatus] = useState<BybitConnectionStatus | null>(null);
  const [bybitLoading, setBybitLoading] = useState(false);
  const [isBybitExpanded, setIsBybitExpanded] = useState(false);
  const [bybitDeleteDialogOpen, setBybitDeleteDialogOpen] = useState(false);
  const [bybitMessage, setBybitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // ---------------------------------------------------------------------------
  // Dev Market Order state
  // ---------------------------------------------------------------------------
  const [orderSymbol, setOrderSymbol] = useState('EURUSD');
  const [orderVolume, setOrderVolume] = useState('0.01');
  const [orderSide, setOrderSide] = useState<'buy' | 'sell'>('buy');
  const [orderLoading, setOrderLoading] = useState(false);

  // ---------------------------------------------------------------------------
  // Load connection status on mount
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const loadStatus = async () => {
      try {
        const status = await dashboardDataService.getForexConnectionStatus();
        setForexStatus(status);
      } catch {
        // No credentials saved yet
      }

      if (isDeveloper) {
        try {
          const status = await dashboardDataService.getBybitConnectionStatus();
          setBybitStatus(status);
        } catch {
          // No credentials saved yet
        }
      }
    };
    loadStatus();
  }, [isDeveloper]);

  // ---------------------------------------------------------------------------
  // Forex handlers (preserved — only presentation changed)
  // ---------------------------------------------------------------------------
  const handleForexSave = useCallback(async () => {
    setForexLoading(true);
    setForexMessage(null);
    try {
      // Test connection automatically before saving
      const testResult = await dashboardDataService.testForexConnection();
      if (!testResult.success) {
        setForexMessage({ type: 'error', text: t('config.apiKeys.forex.testFailed') });
        setForexLoading(false);
        return;
      }

      const credentials: ForexCredentials = {
        token: forexToken,
        accountId: forexAccountId,
        platform: forexPlatform,
        tradingMode: forexTradingMode,
      };
      const result = await dashboardDataService.saveForexCredentials(credentials);
      if (result.success) {
        setForexMessage({ type: 'success', text: t('config.apiKeys.forex.saveSuccess') });
        const status = await dashboardDataService.getForexConnectionStatus();
        setForexStatus(status);
        setForexEditing(false);
      } else {
        setForexMessage({ type: 'error', text: t('config.apiKeys.forex.saveFailed') });
      }
    } catch {
      setForexMessage({ type: 'error', text: t('config.apiKeys.forex.saveFailed') });
    }
    setForexLoading(false);
  }, [forexToken, forexAccountId, forexPlatform, forexTradingMode, t]);

  const handleForexTest = useCallback(async () => {
    setForexLoading(true);
    setForexMessage(null);
    try {
      const result = await dashboardDataService.testForexConnection();
      setForexMessage({
        type: result.success ? 'success' : 'error',
        text: result.success
          ? t('config.apiKeys.forex.testSuccess')
          : t('config.apiKeys.forex.testFailed'),
      });
    } catch {
      setForexMessage({ type: 'error', text: t('config.apiKeys.forex.testFailed') });
    }
    setForexLoading(false);
  }, [t]);

  const handleForexDelete = useCallback(async () => {
    setForexLoading(true);
    try {
      await dashboardDataService.deleteForexCredentials();
      setForexStatus(null);
      setForexToken('');
      setForexAccountId('');
      setForexEditing(false);
      setForexDeleteDialogOpen(false);
    } catch {
      // silent
    }
    setForexLoading(false);
  }, []);

  // ---------------------------------------------------------------------------
  // Bybit handlers (preserved — only presentation changed)
  // ---------------------------------------------------------------------------
  const handleSave = useCallback(async () => {
    setBybitLoading(true);
    setBybitMessage(null);
    try {
      const credentials: ApiCredentials = {
        apiKey: bybitApiKey,
        apiSecret: bybitApiSecret,
        keyName: bybitKeyName || t('config.apiKeys.bybit.defaultKeyName'),
      };
      const result = await dashboardDataService.saveBybitCredentials(credentials);
      if (result.success) {
        setBybitMessage({ type: 'success', text: t('config.apiKeys.bybit.saveSuccess') });
        const status = await dashboardDataService.getBybitConnectionStatus();
        setBybitStatus(status);
      } else {
        setBybitMessage({ type: 'error', text: t('config.apiKeys.bybit.saveFailed') });
      }
    } catch {
      setBybitMessage({ type: 'error', text: t('config.apiKeys.bybit.saveFailed') });
    }
    setBybitLoading(false);
  }, [bybitApiKey, bybitApiSecret, bybitKeyName, t]);

  const handleTest = useCallback(async () => {
    setBybitLoading(true);
    setBybitMessage(null);
    try {
      const result = await dashboardDataService.testBybitConnection();
      setBybitMessage({
        type: result.success ? 'success' : 'error',
        text: result.success
          ? t('config.apiKeys.bybit.testSuccess')
          : t('config.apiKeys.bybit.testFailed'),
      });
    } catch {
      setBybitMessage({ type: 'error', text: t('config.apiKeys.bybit.testFailed') });
    }
    setBybitLoading(false);
  }, [t]);

  const handleDelete = useCallback(async () => {
    setBybitLoading(true);
    try {
      await dashboardDataService.deleteBybitCredentials();
      setBybitStatus(null);
      setBybitApiKey('');
      setBybitApiSecret('');
      setBybitKeyName('');
      setBybitDeleteDialogOpen(false);
    } catch {
      // silent
    }
    setBybitLoading(false);
  }, []);

  // ---------------------------------------------------------------------------
  // Dev Market Order handler
  // ---------------------------------------------------------------------------
  const handleSubmitOrder = useCallback(async () => {
    setOrderLoading(true);
    try {
      await dashboardDataService.submitMarketOrder({
        symbol: orderSymbol,
        volume: parseFloat(orderVolume),
        side: orderSide,
      });
    } catch {
      // silent
    }
    setOrderLoading(false);
  }, [orderSymbol, orderVolume, orderSide]);

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  const hasAnyCredentials = forexStatus?.connected || bybitStatus?.connected;

  const maskAccountId = (id: string) => {
    if (!id || id.length < 4) return '••••';
    return `••••${id.slice(-4)}`;
  };

  // ---------------------------------------------------------------------------
  // Render: Forex section
  // ---------------------------------------------------------------------------
  const renderForexSection = () => {
    const isConnected = forexStatus?.connected;

    return (
      <div className="ld-container">
        <div className="ld-section">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">
                {t('config.apiKeys.forex.sectionTitle')}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {t('config.apiKeys.forex.sectionDescription')}
              </p>
            </div>
            <Badge variant={isConnected ? 'default' : 'secondary'}>
              {isConnected
                ? t('config.apiKeys.badgeConnected')
                : t('config.apiKeys.badgeDisconnected')}
            </Badge>
          </div>

          {/* Message */}
          {forexMessage && (
            <Alert
              variant={forexMessage.type === 'error' ? 'destructive' : 'default'}
              className="mb-4"
            >
              <AlertDescription>{forexMessage.text}</AlertDescription>
            </Alert>
          )}

          {/* Connected — compact status card */}
          {isConnected && !forexEditing && (
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
              <div className="flex items-center gap-4">
                {/* Green dot */}
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>

                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <span className="text-muted-foreground">
                      {t('config.apiKeys.forex.cardPlatform')}:
                    </span>{' '}
                    <span className="font-medium">
                      {forexStatus.platform === 'mt4'
                        ? t('config.apiKeys.forex.platformMT4')
                        : t('config.apiKeys.forex.platformMT5')}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      {t('config.apiKeys.forex.cardAccountId')}:
                    </span>{' '}
                    <span className="font-medium font-mono">
                      {maskAccountId(forexStatus.accountId || '')}
                    </span>
                  </div>
                  <div>
                    <Badge variant="outline" className="text-xs">
                      {forexStatus.tradingMode === 'live'
                        ? t('config.apiKeys.badgeLive')
                        : t('config.apiKeys.badgeDemo')}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="ld-btn ld-btn-secondary text-sm"
                  onClick={() => setForexEditing(true)}
                >
                  {t('config.apiKeys.forex.buttonEdit')}
                </button>
                <button
                  className="ld-btn ld-btn-danger text-sm"
                  onClick={() => setForexDeleteDialogOpen(true)}
                >
                  {t('config.apiKeys.forex.buttonDelete')}
                </button>
              </div>
            </div>
          )}

          {/* Not connected — onboarding + form */}
          {!isConnected && !forexEditing && (
            <div className="p-6 rounded-lg border-2 border-dashed border-muted text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('config.apiKeys.forex.onboardingTitle')}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                {t('config.apiKeys.forex.onboardingDescription')}
              </p>
              <button
                className="ld-btn ld-btn-primary"
                onClick={() => setForexEditing(true)}
              >
                {t('config.apiKeys.forex.buttonConnect')}
              </button>
            </div>
          )}

          {/* Edit / Create form */}
          {forexEditing && renderForexForm()}
        </div>
      </div>
    );
  };

  // ---------------------------------------------------------------------------
  // Render: Forex form (used in both create & edit)
  // ---------------------------------------------------------------------------
  const renderForexForm = () => {
    const isConnected = forexStatus?.connected;

    return (
      <div className="space-y-4 mt-4 p-4 rounded-lg border bg-card">
        {/* Token */}
        <div>
          <label className="ld-label">{t('config.apiKeys.forex.labelToken')}</label>
          <input
            type="password"
            className="ld-input w-full"
            placeholder={t('config.apiKeys.forex.placeholderToken')}
            value={forexToken}
            onChange={(e) => setForexToken(e.target.value)}
          />
        </div>

        {/* Account ID */}
        <div>
          <label className="ld-label">{t('config.apiKeys.forex.labelAccountId')}</label>
          <input
            type="text"
            className="ld-input w-full"
            placeholder={t('config.apiKeys.forex.placeholderAccountId')}
            value={forexAccountId}
            onChange={(e) => setForexAccountId(e.target.value)}
          />
        </div>

        {/* Platform select */}
        <div>
          <label className="ld-label">{t('config.apiKeys.forex.labelPlatform')}</label>
          <Select value={forexPlatform} onValueChange={(v) => setForexPlatform(v as 'mt4' | 'mt5')}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mt4">{t('config.apiKeys.forex.platformMT4')}</SelectItem>
              <SelectItem value="mt5">{t('config.apiKeys.forex.platformMT5')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Trading mode toggle */}
        <div>
          <label className="ld-label">{t('config.apiKeys.forex.labelTradingMode')}</label>
          <div className="flex items-center gap-3 mt-1">
            <span className={`text-sm ${forexTradingMode === 'demo' ? 'font-medium' : 'text-muted-foreground'}`}>
              {t('config.apiKeys.forex.modeDemo')}
            </span>
            <Switch
              checked={forexTradingMode === 'live'}
              onCheckedChange={(checked) => setForexTradingMode(checked ? 'live' : 'demo')}
            />
            <span className={`text-sm ${forexTradingMode === 'live' ? 'font-medium' : 'text-muted-foreground'}`}>
              {t('config.apiKeys.forex.modeLive')}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2">
          <button
            className="ld-btn ld-btn-primary"
            onClick={handleForexSave}
            disabled={forexLoading || !forexToken || !forexAccountId}
          >
            {forexLoading
              ? '...'
              : isConnected
                ? t('config.apiKeys.forex.buttonSave')
                : t('config.apiKeys.forex.buttonConnect')}
          </button>
          {isConnected && (
            <button
              className="ld-btn ld-btn-secondary"
              onClick={() => {
                setForexEditing(false);
                setForexMessage(null);
              }}
            >
              {t('config.apiKeys.forex.buttonCancel')}
            </button>
          )}
        </div>
      </div>
    );
  };

  // ---------------------------------------------------------------------------
  // Render: Bybit section (dev only, collapsible, merged)
  // ---------------------------------------------------------------------------
  const renderBybitSection = () => {
    if (!isDeveloper) return null;

    return (
      <div className="ld-container">
        <div className="ld-section">
          {/* Collapsible header */}
          <button
            className="w-full flex items-center justify-between text-left"
            onClick={() => setIsBybitExpanded(!isBybitExpanded)}
          >
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold">
                {t('config.apiKeys.bybit.sectionTitle')}
              </h2>
              <Badge variant="outline" className="text-xs uppercase tracking-wide">
                {t('config.apiKeys.badgeDevPreview')}
              </Badge>
              {bybitStatus?.connected && (
                <Badge variant="default">{t('config.apiKeys.badgeConnected')}</Badge>
              )}
            </div>
            <svg
              className={`h-5 w-5 text-muted-foreground transition-transform ${isBybitExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <p className="text-sm text-muted-foreground mt-1">
            {t('config.apiKeys.bybit.sectionDescription')}
          </p>

          {/* Collapsible content */}
          {isBybitExpanded && (
            <div className="mt-6 space-y-6">
              {/* Message */}
              {bybitMessage && (
                <Alert
                  variant={bybitMessage.type === 'error' ? 'destructive' : 'default'}
                >
                  <AlertDescription>{bybitMessage.text}</AlertDescription>
                </Alert>
              )}

              {/* Credentials form */}
              <div className="space-y-4">
                <div>
                  <label className="ld-label">
                    {t('config.apiKeys.bybit.labelKeyName')}
                  </label>
                  <input
                    type="text"
                    className="ld-input w-full"
                    placeholder={t('config.apiKeys.bybit.placeholderKeyName')}
                    value={bybitKeyName}
                    onChange={(e) => setBybitKeyName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="ld-label">
                    {t('config.apiKeys.bybit.labelApiKey')}
                  </label>
                  <input
                    type="text"
                    className="ld-input w-full"
                    placeholder={t('config.apiKeys.bybit.placeholderApiKey')}
                    value={bybitApiKey}
                    onChange={(e) => setBybitApiKey(e.target.value)}
                  />
                </div>
                <div>
                  <label className="ld-label">
                    {t('config.apiKeys.bybit.labelApiSecret')}
                  </label>
                  <input
                    type="password"
                    className="ld-input w-full"
                    placeholder={t('config.apiKeys.bybit.placeholderApiSecret')}
                    value={bybitApiSecret}
                    onChange={(e) => setBybitApiSecret(e.target.value)}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="ld-btn ld-btn-primary"
                    onClick={handleSave}
                    disabled={bybitLoading || !bybitApiKey || !bybitApiSecret}
                  >
                    {bybitLoading ? '...' : t('config.apiKeys.bybit.buttonSave')}
                  </button>
                  <button
                    className="ld-btn ld-btn-secondary"
                    onClick={handleTest}
                    disabled={bybitLoading}
                  >
                    {t('config.apiKeys.bybit.buttonTest')}
                  </button>
                  {bybitStatus?.connected && (
                    <button
                      className="ld-btn ld-btn-danger"
                      onClick={() => setBybitDeleteDialogOpen(true)}
                    >
                      {t('config.apiKeys.bybit.buttonDelete')}
                    </button>
                  )}
                </div>
              </div>

              {/* Connection status + permissions (merged into one block) */}
              {bybitStatus?.connected && (
                <div className="p-4 rounded-lg border bg-card space-y-4">
                  {/* Connection status */}
                  <div>
                    <h3 className="text-sm font-semibold mb-2">
                      {t('config.apiKeys.bybit.connectionStatus')}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                      </span>
                      <span className="text-sm">{t('config.apiKeys.badgeConnected')}</span>
                      <span className="text-xs text-muted-foreground">
                        ({bybitStatus.source
                          ? bybitStatus.source === 'api'
                            ? t('config.apiKeys.bybit.sourceApi')
                            : t('config.apiKeys.bybit.sourceWebsocket')
                          : t('config.apiKeys.bybit.sourceUnknown')})
                      </span>
                    </div>
                  </div>

                  {/* Permissions */}
                  {bybitStatus.permissions && (
                    <div>
                      <h3 className="text-sm font-semibold mb-2">
                        {t('config.apiKeys.bybit.permissionsTitle')}
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                        <div className={`p-3 rounded-lg border text-center text-sm ${bybitStatus.permissions.read ? 'border-green-500/30 bg-green-500/5' : 'border-muted'}`}>
                          <div className="font-medium">{t('config.apiKeys.bybit.permRead')}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {t('config.apiKeys.bybit.permReadDesc')}
                          </div>
                        </div>
                        <div className={`p-3 rounded-lg border text-center text-sm ${bybitStatus.permissions.trade ? 'border-green-500/30 bg-green-500/5' : 'border-muted'}`}>
                          <div className="font-medium">{t('config.apiKeys.bybit.permTrade')}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {t('config.apiKeys.bybit.permTradeDesc')}
                          </div>
                        </div>
                        <div className={`p-3 rounded-lg border text-center text-sm ${bybitStatus.permissions.withdraw ? 'border-yellow-500/30 bg-yellow-500/5' : 'border-muted'}`}>
                          <div className="font-medium">{t('config.apiKeys.bybit.permWithdraw')}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {t('config.apiKeys.bybit.permWithdrawDesc')}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  // ---------------------------------------------------------------------------
  // Render: Dev Market Order (dev only)
  // ---------------------------------------------------------------------------
  const renderDevMarketOrder = () => {
    if (!isDeveloper) return null;

    return (
      <div className="ld-container">
        <div className="ld-section">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold">
              {t('config.apiKeys.devMarketOrder.sectionTitle')}
            </h2>
            <Badge variant="outline" className="text-xs uppercase tracking-wide">
              {t('config.apiKeys.badgeDevPreview')}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {t('config.apiKeys.devMarketOrder.sectionDescription')}
          </p>

          <Alert variant="destructive" className="mb-4">
            <AlertDescription>
              {t('config.apiKeys.devMarketOrder.warning')}
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="ld-label">
                {t('config.apiKeys.devMarketOrder.labelSymbol')}
              </label>
              <input
                type="text"
                className="ld-input w-full"
                value={orderSymbol}
                onChange={(e) => setOrderSymbol(e.target.value)}
              />
            </div>
            <div>
              <label className="ld-label">
                {t('config.apiKeys.devMarketOrder.labelVolume')}
              </label>
              <input
                type="number"
                className="ld-input w-full"
                value={orderVolume}
                onChange={(e) => setOrderVolume(e.target.value)}
                step="0.01"
                min="0.01"
              />
            </div>
            <div>
              <label className="ld-label">
                {t('config.apiKeys.devMarketOrder.labelSide')}
              </label>
              <Select value={orderSide} onValueChange={(v) => setOrderSide(v as 'buy' | 'sell')}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">{t('config.apiKeys.devMarketOrder.sideBuy')}</SelectItem>
                  <SelectItem value="sell">{t('config.apiKeys.devMarketOrder.sideSell')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4">
            <button
              className="ld-btn ld-btn-primary"
              onClick={handleSubmitOrder}
              disabled={orderLoading || !orderSymbol}
            >
              {orderLoading ? '...' : t('config.apiKeys.devMarketOrder.buttonSubmit')}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ---------------------------------------------------------------------------
  // Main render
  // ---------------------------------------------------------------------------
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold">{t('config.apiKeys.pageTitle')}</h1>
        <p className="text-muted-foreground mt-1">
          {t('config.apiKeys.pageDescription')}
        </p>
      </div>

      {/* Alert: no credentials — only shown when nothing is connected */}
      {!hasAnyCredentials && (
        <Alert>
          <AlertDescription>
            {t('config.apiKeys.noCredentialsAlert')}
          </AlertDescription>
        </Alert>
      )}

      {/* 1. Forex / MetaAPI — main feature, always first */}
      {renderForexSection()}

      {/* 2. Trading Accounts Manager */}
      <div>
        <div className="mb-2">
          <h2 className="text-xl font-semibold">
            {t('config.apiKeys.tradingAccounts.sectionTitle')}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t('config.apiKeys.tradingAccounts.sectionDescription')}
          </p>
        </div>
        <TradingAccountsManager user={user} />
      </div>

      {/* 3. Separator before dev sections */}
      {isDeveloper && (
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {t('config.apiKeys.devPreviewBanner')}
            </span>
          </div>
        </div>
      )}

      {/* 4. Bybit — dev only, collapsible, at bottom */}
      {renderBybitSection()}

      {/* 5. Dev Market Order — dev only, at very bottom */}
      {renderDevMarketOrder()}

      {/* Forex delete confirmation dialog */}
      <Dialog open={forexDeleteDialogOpen} onOpenChange={setForexDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('config.apiKeys.forex.deleteConfirmTitle')}</DialogTitle>
            <DialogDescription>
              {t('config.apiKeys.forex.deleteConfirmDescription')}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              className="ld-btn ld-btn-secondary"
              onClick={() => setForexDeleteDialogOpen(false)}
            >
              {t('config.apiKeys.forex.buttonCancel')}
            </button>
            <button
              className="ld-btn ld-btn-danger"
              onClick={handleForexDelete}
              disabled={forexLoading}
            >
              {forexLoading ? '...' : t('config.apiKeys.forex.deleteConfirmButton')}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Bybit delete confirmation dialog */}
      <Dialog open={bybitDeleteDialogOpen} onOpenChange={setBybitDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('config.apiKeys.bybit.deleteConfirmTitle')}</DialogTitle>
            <DialogDescription>
              {t('config.apiKeys.bybit.deleteConfirmDescription')}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              className="ld-btn ld-btn-secondary"
              onClick={() => setBybitDeleteDialogOpen(false)}
            >
              {t('config.apiKeys.forex.buttonCancel')}
            </button>
            <button
              className="ld-btn ld-btn-danger"
              onClick={handleDelete}
              disabled={bybitLoading}
            >
              {bybitLoading ? '...' : t('config.apiKeys.bybit.deleteConfirmButton')}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardApiKeys;
