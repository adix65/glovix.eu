// DashboardDataService — DO NOT MODIFY
// This service handles all API communication for the dashboard.

export interface ApiCredentials {
  apiKey: string;
  apiSecret: string;
  keyName?: string;
}

export interface ForexCredentials {
  token: string;
  accountId: string;
  platform: 'mt4' | 'mt5';
  tradingMode: 'live' | 'demo';
}

export interface ForexConnectionStatus {
  connected: boolean;
  platform?: string;
  accountId?: string;
  tradingMode?: string;
  lastSync?: string;
}

export interface BybitConnectionStatus {
  connected: boolean;
  permissions?: {
    read: boolean;
    trade: boolean;
    withdraw: boolean;
  };
  source?: string;
}

export interface MarketOrderPayload {
  symbol: string;
  volume: number;
  side: 'buy' | 'sell';
}

class DashboardDataService {
  async saveBybitCredentials(credentials: ApiCredentials): Promise<{ success: boolean; message?: string }> {
    throw new Error('Not implemented — stub');
  }

  async testBybitConnection(): Promise<{ success: boolean; message?: string }> {
    throw new Error('Not implemented — stub');
  }

  async deleteBybitCredentials(): Promise<{ success: boolean }> {
    throw new Error('Not implemented — stub');
  }

  async getBybitConnectionStatus(): Promise<BybitConnectionStatus> {
    throw new Error('Not implemented — stub');
  }

  async saveForexCredentials(credentials: ForexCredentials): Promise<{ success: boolean; message?: string }> {
    throw new Error('Not implemented — stub');
  }

  async testForexConnection(): Promise<{ success: boolean; message?: string }> {
    throw new Error('Not implemented — stub');
  }

  async deleteForexCredentials(): Promise<{ success: boolean }> {
    throw new Error('Not implemented — stub');
  }

  async getForexConnectionStatus(): Promise<ForexConnectionStatus> {
    throw new Error('Not implemented — stub');
  }

  async submitMarketOrder(order: MarketOrderPayload): Promise<{ success: boolean; orderId?: string }> {
    throw new Error('Not implemented — stub');
  }
}

export const dashboardDataService = new DashboardDataService();
export default DashboardDataService;
